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
  let [num, setNum] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {};
  }, []);

  useEffect(() => {
    // if (isNaN(num)) {
    // alert('경고: 숫자만 입력하세요');
    // }
  }, [num]);

  return (
    <div className='container'>
      {alert === true ? (
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
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          {isNaN(num) ? <div>경고: 숫자만 입력하세요 !</div> : <div />}
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
