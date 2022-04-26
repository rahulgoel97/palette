import React from 'react';
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import TextCascade from './TextCascade';
import ColorPage from './ColorPage.js';
import RegisterPage from './RegisterPage.js';
import Login from './Login.js'
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/Auth';


function App() {
  return(
  	<div className="App">
  		<AuthProvider>
  			<Routes>
  			
	  				<Route path="/" exact element={<ColorPage/>} />
	  				<Route path="login" exact element={<Login/>} />
	  				<Route path="register" exact element={<RegisterPage/>} />
	  		
	  		</Routes>
	  	</AuthProvider>
	 </div>

  );
}

export default App;
