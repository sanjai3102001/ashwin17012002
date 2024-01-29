import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';

function Home() {
  return (
    <>
<div className='bg' >
     <Navbar bg="primary" data-bs-theme="dark">
 <Container>
   <Navbar.Brand href="#home">Home</Navbar.Brand>
   <Nav className="me-auto">
     <Nav.Link href="#home">Dashboard</Nav.Link>
     <Nav.Link href="/Category">Category</Nav.Link>
     <Nav.Link href="/Client">Client</Nav.Link>
   </Nav>
 </Container>
</Navbar>
<h1 className='d3'><i class="fa-duotone fa-camera-retro">Welcome! Ashwin c.s</i></h1>
</div>
{/* <h1>Welcome! Ashwin c.s</h1> */}



    </>
  )
}

export default Home




 