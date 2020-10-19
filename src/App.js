import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './App.css';
import logo2 from './images/slide_2.jpg';
import logo3 from './images/slide_3.jpg';
import logo4 from './images/slide_4.jpg';

const Slideshow = () => {
    return (
      <div className="slide-container">
      
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${logo2})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${logo3})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${logo4})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;