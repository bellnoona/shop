import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === 'skyblue' ? 'gray' : 'black')};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [count]);

  // for (var i = 0; i < 10000; i++) {
  //   console.log(1);
  // }

  return (
    <div className='container'>
      {/* <YellowBtn bg='skyblue'>버튼</YellowBtn> */}
      {/* <YellowBtn bg='coral'>버튼</YellowBtn> */}

      {alert == true ? (
        <div className='alert alert-warning'>2초 이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
          />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{props.pet[id].title}</h4>
          <p>{props.pet[id].content}</p>
          <p>{props.pet[id].price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
