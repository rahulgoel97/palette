import React from 'react';
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import logo from './logo.svg';
import './App.css';

function App() {

const [primaryPickedColor, setPrimaryPickedColor] = useState("#00a3e0");
const [secondaryPickedColor, setSecondaryPickedColor] = useState("#00a3e0");

const handlePrimaryChangeComplete = (color) =>{
    setPrimaryPickedColor(color);
}

const handleSecondaryChangeComplete = (color) =>{
    setSecondaryPickedColor(color);
}



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


                                <div className="title" style={{color:`${primaryPickedColor}`}}> 
                                  Text 1 
                                </div>


                            </div>


                            <div className="col">

                                <div className="title" style={{color:`${secondaryPickedColor}`}}> 
                                  Text 1 
                                </div>

                            </div>

                             

              </div>

    </div>
  );
}

export default App;
