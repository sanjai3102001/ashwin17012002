import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiLogOut } from "react-icons/fi";
import img30 from '../Images/img30.jpg';
import img31 from '../Images/img31.webp';
import img32 from '../Images/img32.jpg';
import Card from 'react-bootstrap/Card';
import img39 from '../Images/img39.webp';
import img35 from '../Images/img35.jpg';
import { Row,Col } from 'react-bootstrap';
import img36 from '../Images/img36.jpg';
import img34 from '../Images/img34.jpg';

function Home() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">ShoPperZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <Nav.Link href="#action2">Logout <FiLogOut /></Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Men's Club</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="/Clothes">Clothes</Nav.Link>
            <Nav.Link href="/Watches">Watches</Nav.Link>
            <Nav.Link href="#Shoes">Shoes</Nav.Link>
            <Nav.Link href="/Datatable">Datatable</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    
    </>
  )
}

export default Home