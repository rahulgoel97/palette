import React from 'react';
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import TextCascade from './TextCascade';
import NavBar from './NavBar';

function ColorPage() {

const [primaryPickedColor, setPrimaryPickedColor] = useState({"hex": "#9822FF"});
const [secondaryPickedColor, setSecondaryPickedColor] = useState({"hex": "#FF0DF4"});

const handlePrimaryChangeComplete = (color) =>{
    setPrimaryPickedColor(color);
}

const handleSecondaryChangeComplete = (color) =>{
    setSecondaryPickedColor(color);
}

function invertColor(hex) {
	hex = hex.hex
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
    	
        throw new Error('Invalid HEX color.');

    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}


const handlePrimaryInvert = () =>
{
	const invertedPrimaryColor = invertColor(primaryPickedColor)
	setPrimaryPickedColor(invertedPrimaryColor)
}

const handleSecondaryInvert = () =>
{
	const invertedSecondaryColor = invertColor(secondaryPickedColor)
	setSecondaryPickedColor(invertedSecondaryColor)
}

  return (
    <div className="App">

        <NavBar/>

              <div className="flex-grid">

                          <div className="col">

                                              <div className="primary-heading"> 
                                              Primary Color 
                                              </div>

                                              <button
                                              	className="invert-button"
                                              	onClick={handlePrimaryInvert}> Invert </button>

                                              <div className="color-picker">
                                                      
                                                      <SketchPicker
                                                                    color = {primaryPickedColor}
                                                                    onChangeComplete = { handlePrimaryChangeComplete }

                                                      />
                                              </div>
                                      


                                              <div className="primary-heading"> 
                                              Secondary Color 
                                              </div>

                                              <button
                                              	className="invert-button"
                                              	onClick={handleSecondaryInvert}> Invert </button>

                                              <div className="color-picker">

                                                      <SketchPicker
                                                                  color = {secondaryPickedColor}
                                                                  onChangeComplete = { handleSecondaryChangeComplete }

                                                      />
                                              </div>

                            </div>
                            

                            <div className="col">
                                <div className="primary-heading"> 
                                              Light Mode 
                                </div>


                                
                                      <div className="left-box">
                                          <div className="flex-grid">
                                                <div className="col">
                                                  <TextCascade 
                                                    color1 = {primaryPickedColor.hex} 
                                                    />
                                                </div>

                                                <div className="col">
                                                    <TextCascade 
                                                    color1 = {secondaryPickedColor.hex} 
                                                    />
                                                </div>
                                          </div>
                                      </div>
                               



                            </div>


                            <div className="col">
                                <div className="primary-heading"> 
                                              Dark Mode 
                                </div>
                                <div className="right-box">
                                  <div className="flex-grid">
                                      <TextCascade 
                                          color1 = {primaryPickedColor.hex} />
                                      <TextCascade 
                                        color1 = {secondaryPickedColor.hex} />
                                  </div>
                                </div>
                            </div>

                             

              </div>

    </div>
  );
}

export default ColorPage;
