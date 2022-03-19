import React from 'react';
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import TextCascade from './TextCascade';
import ColorPage from './ColorPage.js';
import RegisterPage from './RegisterPage.js'
import { Routes, Route } from "react-router-dom";
function App() {
  return(
  	<div className="App">
	  	<ColorPage/>
	 </div>

  );
}

export default App;
