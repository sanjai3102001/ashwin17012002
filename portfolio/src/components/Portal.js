import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import img13 from './images/img13.png'
import { Button, Row, Col } from 'react-bootstrap';
import img6 from './images/img6.jpg'

function Portal() {
    return (
        <>
         <div className='bg'>
            <Row>
                
                <div className='body'>
                    <header className='header'>
                        <a href='#' className='logo'>Ashwin</a>
                        <nav className='navbar'>
                            <a href='#Home' className='active'>Home</a>
                            <a href='/About'>About</a>
                            <a href='/Education'>Education</a>
                            <a href='/Project'>Project</a>
                            <a href='/Skills'>Skills</a>
                            <a href='/Contact'>Contact</a>

                        </nav>
                    </header>
                </div>
            </Row>
            <Row className='mrow'>
                <Col md={12}>
                    <div className="image12">
                        <img src={img13} style={{ height: '15rem', width: '25rem' }} />
                    </div>
                    <div className='home-content'>
                        <h1 style={{color:"white"}}>Hi, I'm Ashwinsekar</h1>
                        <h3>FullStack Developer</h3>
                        <p style={{ color:"yellowgreen"}}>I'm strong in designing and im a good developer</p>
                        <div className='btn-box'>
                            <a href='#'>Hire me</a>
                            <a href='#'>Let's talk</a>
                        </div>
                    </div>


                </Col>
            </Row>
            <Row className='link'>
                <div className='home-sci'>
                    <a href='#'><i class="bi bi-whatsapp"></i></a>
                    <a href='#'><i class="bi bi-google"></i></a>
                    <a href='#'><i class="bi bi-linkedin"></i></a>

                </div>
            </Row>
            </div>

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


      <section className='education' id="education">
        <h2 className='heading'>My<span>Journey</span></h2>
         <div className='education-row'>
            <div className='education-column'>
                <h3 className='title' style={{background:"lightblue"}}>Educational Qualification</h3>

                <div className='education-box'>
                    <div className='education-content'>
                        <div className='content'>
                        <div className='year'><i class="bi bi-calendar"></i>2016 - 2017</div>
                        <h3 style={{color:"green"}}>80%</h3>
                        <p style={{color:"violet"}}>Beula Matriculation Higher Secondary School,Valparai.</p>
                        </div>
                        </div>

                        
                    <div className='education-content'>
                        <div className='content'>
                        <div className='year'><i class="bi bi-calendar"></i>2018 - 2019</div>
                        <h3 style={{color:"green"}}>85%</h3>
                        <p style={{color:"violet"}}>Beula Matriculation Higher Secondary School,Valparai.</p>
                        </div>
                        </div>

                        
                    <div className='education-content'>
                        <div className='content'>
                        <div className='year'><i class="bi bi-calendar"></i>2019 - 2022</div>
                        <h3 style={{color:"green"}}>75%</h3>
                        <p style={{color:"violet"}}>Dr.N.G.P Arts and Science College,Coimbatore.</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>


                        <section className='skills' id="skills">
        <h2 className='heading'>My<span>Skills</span></h2>

        <div className='skills-row'>
            <div className='skills-column'>
                <h3 className='title' style={{background:"white",color:"blue"}}>Coding Skills</h3>

                <div className='skills-box'>
                    <div className='skills-content'>
                       <div className='progress'>
                         <h3 style={{color:"violet"}}>HTML<span>90%</span></h3>
                         <div className='bar'><span></span></div>
                         </div>
                      
                         <div className='progress'>
                         <h3 style={{color:"violet"}}>CSS<span>80%</span></h3>
                         <div className='bar'><span></span></div>
                         </div>

                         <div className='progress'>
                         <h3 style={{color:"violet"}}>JAVASCRIPT<span>60%</span></h3>
                         <div className='bar'><span></span></div>
                         </div>

                         <div className='progress'>
                         <h3 style={{color:"violet"}}>REACT<span>75%</span></h3>
                         <div className='bar'><span></span></div>
                         </div>
                    </div>
                </div>
            </div>
            
             
          



        </div> 
        
        
         </section>




         <section className='contact' id="contact">
        <h2 className='heading'>Contact<span>Me!</span></h2>

        <form action='#'>
            <div className='input-box'>
                <div className='input-field'>
                    <input type="text" placeholder='Full Name' required></input>
                    <span className='focus'></span>
                </div>
                <div className='input-field'>
                    <input type="text" placeholder='Email Address' required></input>
                    <span className='focus'></span>
                </div>
            </div>
          
            <div className='input-box'>
                <div className='input-field'>
                    <input type="number" placeholder='Mobile Number' required></input>
                    <span className='focus'></span>
                </div>
                <div className='input-field'>
                    <input type="text" placeholder='Email Subject' required></input>
                    <span className='focus'></span>
                </div>
            </div>
             
             <div className='textarea-field'>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <span className='focus'></span>
             </div>

             <div class="btn-box btns">
                <button type='submit' className='btn'>Submit</button>
             </div>
        </form>
      </section>


            
            



        </>
    )
}

export default Portal
