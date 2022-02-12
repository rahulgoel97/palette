import React from 'react';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import logo from './logo.svg';
import './App.css';

function App() {

const [pickedColor, setPickedColor] = useState("#00a3e0");

const handleChangeComplete = (color) =>{
    setPickedColor(color);
}

  return (
    <div className="App">
        <div className="title"> Palette </div>
        <div className="color-picker">
            <SketchPicker
                            color = {pickedColor}
                            onChangeComplete = { handleChangeComplete }

             />
        </div>
    </div>
  );
}

export default App;
