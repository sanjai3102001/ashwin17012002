import React from 'react';
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg"
import img19 from  "./images/img19.jpg";
import img20 from  "./images/img20.png";
import { Button } from 'react-bootstrap';




const Project = () => {
  return (
 
  <div>

  <div className="articles">
    <article>
     
      <figure><img src={img18} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>Calculator</h2>
     
        <Button href='/cal'> click</Button>
      </div>
    </article>

    <article>
      <figure><img src={img19} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>Age-Calculator</h2>
        <Button href='/Agecal'> click</Button>
      </div>
    </article>

    <article>
      <figure><img src={img20} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>To-DO Application</h2>
        <p></p>
      </div>
    </article>

    <article>
      <figure><img src={img17} alt="Snowy Mountains" /></figure>
      <div className="article-preview">
        <h2>E-Commerce</h2>
        <p></p>
      </div>
    </article>
  </div>
</div>

 
  );
}


export default Project;
