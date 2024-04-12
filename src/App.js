import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.js'
import Detail from './pages/Detail'
import Main from './pages/Main'
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function App() {

  let navigate = useNavigate();
  let [shoes, Setshoes] = useState(data);

  return (
    <div className="App">
      {/* 상단바 */}
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">Usinsa</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
          <Nav.Link as={Link} to="/event">Event</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      {/* 라우터 */}
      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버임.</div>} />
          <Route path="location" element={<div>위치정보임.</div>} /> 
        </Route>

        <Route path="/event" element={<Event/>} >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} /> 
        </Route>

        <Route path="*" element={<div>없는페이지임.</div>} />
      </Routes>

    </div>
  );
}

function About() {
  return(
    <div>
      <h4>회사정보임.</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return(
    <div>
      <h4>오늘의 이벤트.</h4>
      <Outlet></Outlet>
    </div>
  )
}




export default App;
