import React from 'react'

function Skills() {
  return (
    <>
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
    </>
  )
}

export default Skills
