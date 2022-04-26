import React from 'react';
import { useState, useRef, useContext, useEffect } from 'react';
import './App.css';
import { useNavigate, Link } from 'react-router-dom';
import supabase from './supabaseClient.js';
import { useAuth } from './contexts/Auth';



function RegisterPage() {

 
  const emailRef = useRef()
  const passwordRef = useRef()

  // Get signUp function from the auth context
  const { signIn } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values

    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls 'signUp' function from the context
    const { error } = await signIn({email, password})

    if (error) {
    	alert('error signing in')
    	console.log(error)
    } else {
    	// Redirect user to Dashboard
    	navigate('/'); 
     }
  }


  return (
    <div className="App">

        <div className="title-register"> 
        🎨 Palette 
        </div>

        <div className="register-box">



                <div className="register-text"> 
                                                      Login
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

                  <button className="submit-button" type="submit">Sign In</button>

                  
                </form>

                <Link to="/register">
                      <p className="sign-up-prompt"> Don't have an account? Sign up here </p>

                  </Link>
                  <br/>
                  <br/>
          
        </div>

    </div>
  );
}

export default RegisterPage;
