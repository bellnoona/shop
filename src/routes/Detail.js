import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

import { Context1 } from './../App.js';
import { useContext } from 'react';

import { addItem } from '../store/cartSlice.js';
import { useDispatch } from 'react-redux';

function Detail(props) {
  let { 재고 } = useContext(Context1);

  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {};
  }, []);

  return (
    <div className='container'>
      {alert === true ? (
        <div className='alert alert-warning'>2초 이내 구매시 할인</div>
      ) : null}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            alt=''
            width='100%'
          />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{props.pet[id].title}</h4>
          <p>{props.pet[id].content}</p>
          <p>{props.pet[id].price}원</p>
          <button
            className='btn btn-danger'
            onClick={() => {
              dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
            }}
          >
            주문하기
          </button>
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
  let [fade, setFade] = useState('');
  let { 재고 } = useContext(Context1);

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 10);
    return () => {
      setFade('');
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
