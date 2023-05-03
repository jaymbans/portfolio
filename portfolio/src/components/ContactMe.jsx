import React from 'react'

function ContactMe() {

  return (
    <section id='contact-me'>
      <h1>contact me</h1>
      <div id="contact-me-background-rectangle"></div>
      <div id="contact-me-background-triangle"></div>
      <div className="content">
        <form className="card" action="https://formsubmit.co/jordan@mbanefo.com" method="POST">
          <h6>Let's Chat</h6>
          <div className="name-email-row">
            <input type="text" placeholder='Name' name='name' />
            <input type="email" placeholder='Email' name='email' />
          </div>
          <input type="text" placeholder='Subject' name='subject' />
          <textarea type="text" placeholder='Message' name='body' />
          <input type="hidden" name="_autoresponse" value="Thanks for reaching out, I will get back to you in less than 24hrs! -Jordan Mbanefo"></input>
          <button
            className='blue-btn'
            type='submit'>
            SEND MESSAGE
          </button>
        </form>
        <div>
          <h6>
            Quickest way to reach me is through
            <a href='https://www.linkedin.com/in/jordan-mbanefo-80918916b/' target='_blank'>
              <img src={require('../assets/linkedin-logo-contact.png')} />
            </a>
          </h6>


        </div>
      </div>
    </section>
  )
}

export default ContactMe