import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m6bzei9', 'template_oq1osn8', form.current, '4uJousGLtO1DsESx7').then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id='contact'>
      <div className='container pt-5 '>
        <div className='row'>
          <div className='col text-center'>
            <p className='title'>Contact</p>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center p-3'>
            <div className='alert alert-success alert-dismissible fade show d-none' role='alert'>
              <strong>Success!</strong> your message has been received
              <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
            </div>
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
              <input type='text' name='nama' placeholder='Your name' />
              <br />
              <input type='email' name='email' placeholder='Your email' />
              <br />
              <textarea name='pesan' placeholder='Type here...'></textarea>
              <br />
              <button className='btn-kirim' type='submit'>
                Send
              </button>
              <button className='btn btn-loading d-none' type='button' disabled>
                <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
                Loading...
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
