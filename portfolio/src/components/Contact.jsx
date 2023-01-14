import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormControl, Form, Button } from 'react-bootstrap'

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_651nglq', 'template_5l330a7', form.current, 'utZP25tjcR_kMIURO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  return (
    <section id="reach-out" className="contact">
    <div className="flex-row">
      <h2 className="section-title secondary-border">Reach Out</h2>
    </div>

    <div className="contact-info">
      <div>
        <h2>Want to get into contact?</h2>
        <address>
          Columbus, OH 
          <br />
          P: <a href="tel:614.956.9338">614.956.9338</a>
          <br />
          E:{" "}
          <a href="mailto://ankithdeekollu@gmail.com">
            ankithdeekollu@gmail.com
          </a>
        </address>
        <p>
          <strong>Love to hear your feedback!</strong>
        </p>
      </div>
    <Form ref={form} onSubmit={sendEmail}>
      <label for="contact-name">Name</label>
      <input type="text" className='form-control' value={userName} onChange={(e) => setUserName(e.target.value)} id="contact-name" placeholder="Your Name" name="user_name" />
      <label for="contact-email">Email</label>
      <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} id="contact-email" placeholder='Your Email' name="user_email" />
      <label for="contact-message">Message</label>
      <textarea name="message" className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} id="contact-message" placeholder='Your Message' />
      <input type="submit" className='btn btn-primary' />
    </Form>
    </div>
    </section>
  );
};
