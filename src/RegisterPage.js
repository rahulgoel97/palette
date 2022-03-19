import React from 'react';
import { useState, useRef, useContext, useEffect } from 'react';
import './App.css';
import supabase from './supabaseClient.js';

const AuthContext = React.createContext()

export function AuthProvider({ children }){
	const [user, setUser] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(()=>{
		// Check active sessions
		const session = supabase.auth.session()

		setUser(session?.user ?? null)
		setLoading(false)

		// Listen for changes
		const { data: listener } = supabase.auth.onAuthStateChange(
			async(event, session)=>{
				setUser(session?.user ?? null)
				setLoading(false)
			}
		)


		return () =>{
			listener?.unsubscribe()
		}
	}, [])


	// Passed down to signup

	const value = {
		signUp: (data) => supabase.auth.signUp(data),
		signIn: (data) => supabase.auth.signIn(data),
		signOut: () => supabase.auth.signOut(),
		user,
	}

	return (
		<AuthContext.Provider value={value}>
		{!loading && children}
		</AuthContext.Provider>
	)
}

export function useAuth(){
	return useContext(AuthContext)
}



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
