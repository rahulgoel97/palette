import React from 'react';
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import TextCascade from './TextCascade';

function App() {

const [primaryPickedColor, setPrimaryPickedColor] = useState({"hex": "#9822FF"});
const [secondaryPickedColor, setSecondaryPickedColor] = useState({"hex": "#FF0DF4"});

const handlePrimaryChangeComplete = (color) =>{
    setPrimaryPickedColor(color);
}

const handleSecondaryChangeComplete = (color) =>{
    setSecondaryPickedColor(color);
}

useEffect(()=>{console.log(primaryPickedColor)})

  return (
    <div className="App">

        <div className="title"> 🎨 Palette </div>

              <div className="flex-grid">

                          <div className="col">

                                              <div className="primary-heading"> 
                                              Primary Color 
                                              </div>

                                              <div className="color-picker">
                                                      
                                                      <SketchPicker
                                                                    color = {primaryPickedColor}
                                                                    onChangeComplete = { handlePrimaryChangeComplete }

                                                      />
                                              </div>
                                      


                                              <div className="primary-heading"> 
                                              Secondary Color 
                                              </div>

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

export default App;
