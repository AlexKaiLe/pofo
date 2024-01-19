import React, { useState, useEffect, useRef } from 'react';
import './Welcome.css'
import Slide from '@mui/material/Slide';
import headshot from './images/education/headshot.JPG'
import brown from './images/education/brown.png'
import haas from './images/education/haas.png'
import RISD from './images/education/RISD.png'


const Welcome = ({theme}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []); 

  return (
    <div className="shape" ref={targetRef}>
        <div id='WELCOME_PAGE' className='Welcome-Page' style={{color: theme.palette.light_dark.main}}>
            <h1 >Welcome</h1>
        </div>
      <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={1000}>
        <div className="welcome-wrapper" style={{color: theme.palette.light_dark.main}}>
          <div className="welcome-body">
            <div className="text-box">
              <div>
                <h3>Hello there!!!</h3>
                <p>My name is Alexander Le.</p>
                <p>Welcome to my personal website where I explore my interests in <u>software engineering</u>, <u>biology</u>, and <u>industrial design</u>. </p>
                <p>I have a background in Computational Biology with an emphasis on deep learning and molecular biology. However, I still keep in touch with my creative side through design and entrepreneurial ventures.</p>
                <p>To have the best experience, please view the website on a computer in full screen. Scroll up and down to move around!</p>
              </div>
            </div> 
            <div className='img-format'>
                <img className="img-box" src={headshot} alt="Headshot"></img>
            </div>
          </div>
          <div className="education-imgs">
            <div className='education-box'>
              <img className="education" style={{backgroundColor: theme.palette.cards.main}} src={brown} alt="brown"></img>
              <p>Brown University</p>
            </div>
            <div className='education-box'>
              <img className="education" style={{backgroundColor: theme.palette.cards.main}} src={RISD} alt="RISD"></img>
              <p>Rhode Island</p>
              <p>School of Design</p>
            </div>
            <div className='education-box'>
              <img className="education" style={{backgroundColor: theme.palette.cards.main}} src={haas} alt="haas"></img>
              <p>UC Berkley Haas</p>
              <p>School of Business</p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
export default Welcome;