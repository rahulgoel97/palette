import React from 'react';
import { useState, useRef } from 'react';
import './App.css';


function RegisterPage() {

 
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    // @TODO: add sign up logic
  }


  return (
    <div className="App">

        <div className="title-register"> 
        🎨 Palette 
        </div>

        <div className="register-box">

        		

                <div className="register-text"> 
                                                      Register
                </div> 


                <form onSubmit={handleSubmit}>
                  
                	<div className="email-div">
				                  <label className="register-form-label" htmlFor="input-email">
				                    EMAIL
				                  </label>

				                  < br/>

				                  <input id="input-email" type="email" ref={emailRef} />
				                  <br/>

				    </div>

				    <div className="password-div">

				                  <label className="register-form-label" htmlFor="input-password">
				                    PASSWORD
				                  </label>


				                  < br/>
				                  <input id="input-password" type="password" ref={passwordRef} />

				                  <br />
				    </div>

                  <button className="submit-button" type="submit">Sign up</button>
                </form>
          
        </div>

    </div>
  );
}

export default RegisterPage;
