import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      //   for (let i = 0; i < state.length; i++) {
      //     if (state[i].id === action.payload) {
      //       state[i].count++;
      //     }
      //   }
      let num = state.findIndex((a) => a.id === action.payload);
      state[num].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem } = cart.actions;
export default cart;
