import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [pet] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>PetShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>

              <div className='container'>
                <div className='row'>
                  {pet.map((a, i) => {
                    // {pet.map((pet, i) => {
                    //   console.log(pet);
                    return <Card pet={pet[i]} i={i} />;
                    // return <Card pet={pet} key={i} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail pet={pet} />} />

        <Route path='*' element={<div>없는 페이지입니다.</div>} />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버</div>} />
          <Route path='location' element={<div>위치정보</div>} />
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      {/* <img
        src='http://avenireve.hgodo.com/data/goods/21/10/40//1000003563/register_detail_091.jpg'
        width='80%'
      /> */}
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='80%'
      />
      <h5>{props.pet.title}</h5>
      <p>{props.pet.price}</p>
    </div>
  );
}

export default App;
