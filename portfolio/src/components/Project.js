import React from 'react';
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg"
import img19 from  "./images/img19.jpg";
import img20 from  "./images/img20.png";
import { Button, Row, Col } from 'react-bootstrap';




const Project = () => {
  return (
   
  <div>
     
   
  <div className="articles">
  <Row className=''>
    <Col md={2}>
    <article className='calc'>
     
      <figure><img src={img18} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>Calculator</h2>
     
        <Button href='/Calculator'> click</Button>
      </div>
    </article>
    </Col>
    
   <Col md={2}>
    <article className='Agecal'>
      <figure><img src={img19} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>Age-Calculator</h2>
        <Button href='/AgeCal'> click</Button>
      </div>
    </article>
    </Col>
    </Row>
   <Row>
    <Col md={2}>
    <article className='todo'>
      <figure><img src={img20} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>To-DO Application</h2>
        <Button href='/Login'> click</Button>
        <p></p>
      </div>
    </article>
    </Col>
    <Col md={2}>
    <article className='Ecom'>
      <figure><img src={img17} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>E-Commerce</h2>
        <Button href='/Calculator'> click</Button>
        <p></p>
      </div>
    </article>
    </Col>
    </Row>
   
  </div>
</div>


 
  );
}


export default Project;
