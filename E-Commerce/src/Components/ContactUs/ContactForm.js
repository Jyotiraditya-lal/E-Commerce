import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

import classes from './ContactForm.module.css';

function ContactForm(props) {
  const NameRef = useRef('');
  const EmailRef = useRef('');
  const NumberRef = useRef('');

  function submitHandler(event) {
    
    event.preventDefault();

    if(!EmailRef.current.value.includes('@') && !EmailRef.current.value.includes('.com')){
      alert('Please enter a valid email')
    }else if(NumberRef.current.value.length!==10){
      alert('Please enter a valid phone number')
    }else{
      const info = {
        name: NameRef.current.value,
        emailId: EmailRef.current.value,
        phoneNumber: NumberRef.current.value,
      };
      NameRef.current.value=''
      EmailRef.current.value=''
      NumberRef.current.value=''
  
      props.onSendInfo(info);
    }
  }

  return (
    <form onSubmit={submitHandler} style={{paddingLeft: '13rem',paddingRight: '13rem',paddingTop: '30px'}} >
      <div className={classes.control}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' ref={NameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='id'>Email Id:</label>
        <input id='id' ref={EmailRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='number'>Phone Number:</label>
        <input type='number' id='number' ref={NumberRef} />
      </div>
      <Button type='submit' className='btn btn-secondary'>Send Info</Button>
    </form>
  );
}

export default ContactForm;
