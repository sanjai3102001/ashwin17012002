import React from 'react'
import img6 from './images/img6.jpg'

function About() {
  return (
    <>
    <div className='aboutpage'>
      <section className='about' id='about'>
        <h2 className='heading'>About<span>Me</span></h2>
        <div className='about-img'>
          <img src={img6}/>
          <span className='circle-spin'></span>
        </div>
        <div className='about-content'>
           <h3 style={{background:"grey"}}>FullStack Developer!</h3>
           <p style={{background:"grey"}}>Im strong in designing and good developer</p>
           <div className='btn-box.btns'>
            <a href='#' className='btn'>Readmore</a>
           </div>
        </div>

      </section>
      </div>
    </>
  )
}

export default About






