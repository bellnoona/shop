import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
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
  let [탭, 탭변경] = useState(0);

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
      {/* {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button> */}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            alt=''
            width='100%'
          />
          {/* <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          /> */}
          {isNaN(num) ? <div>경고: 숫자만 입력하세요 !</div> : <div />}
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{props.pet[id].title}</h4>
          <p>{props.pet[id].content}</p>
          <p>{props.pet[id].price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey='link0'
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey='link1'
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey='link2'
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  if (탭 === 0) {
    return <div>내용0</div>;
  }
  if (탭 === 1) {
    return <div>내용1</div>;
  }
  if (탭 === 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
