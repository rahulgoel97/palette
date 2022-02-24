import React from 'react';
import './App.css';

const TextCascade = ({color1}) => {


  return (
    <div className="App">
            <div className="text1" style={{color:`${color1}`}}> 
              Text
            </div>

            <div className="text2" style={{color:`${color1}`}}> 
              Text
            </div>

            <div className="text3" style={{color:`${color1}`}}> 
              Text
            </div>

            <div className="text4" style={{color:`${color1}`}}> 
              Text
            </div>

            <div className="text5" style={{color:`${color1}`}}> 
              Text
            </div>
    </div>
  );
}

export default TextCascade;
