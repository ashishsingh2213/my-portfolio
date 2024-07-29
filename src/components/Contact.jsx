import React from 'react'
import "../styles/contact.css"
const Contact = () => {

  return (
    <div className="contact">
      <div className="contact-heading1">
        <h1>Contact</h1>
        <div className="contact-heading1-icon">
          <span class="material-symbols-outlined">
            call_received
          </span>
        </div>
      </div>
      <div className="contact-heading1-info">
        <div className="contact-heading1-info-para">
          <h1>I know you already have an awesome idea already, holla at me let's build it together!!
          </h1>
          <p>
            I am currently available for short, mid or long term opportunities, I will be waiting for your message so we can start bring your product to life.</p>
        </div>
      </div>
      
      <form action="/submit" method="post" class="form">
            <div class="input-info">
                <input type="text" id="name" placeholder="Name"/>
                <input type="email" id="email" name="email" placeholder="Email"/>
            </div>
            <textarea id="message" name="message" placeholder="Message"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default Contact
