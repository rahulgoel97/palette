import React from 'react';
import { useState, useRef, useContext, useEffect } from 'react';
import '../App.css';
import supabase from '../supabaseClient.js';

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



