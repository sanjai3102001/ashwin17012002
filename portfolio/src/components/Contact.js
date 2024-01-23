import React from 'react'

function Contact() {
  return (
    <>
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

export default Contact
