import React, { useState, useEffect, useRef } from 'react';
import './Welcome.css'
import Slide from '@mui/material/Slide';
import headshot from './images/headshot.JPG'
import brown from './images/brown.png'
import haas from './images/haas.png'
import RISD from './images/RISD.png'


const Welcome = () => {
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
    <div ref={targetRef}>
      <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit timeout={2000}>
        <div className="welcome-wraper">
            <h1>Welcome</h1>
            <div className="education-imgs">
                <img className="education" src={brown} alt="brown"></img>
                <img className="education" src={RISD} alt="RISD"></img>
                <img className="education" src={haas} alt="haas"></img>
            </div>
            <div className="body">
                <div className="text-box">
                    <h3>Hello there!!!</h3>
                    <p>My name is Alexander Le.</p>
                    <p>Welcome to my personal website where I explore my interests in software engineering, biology, and industrial design. I have a background in Computational Biology with an emphasis on deep learning and molecular biology.</p>
                    <p>However, I still keep in touch with my creative side through design and entrepreneurial ventures.</p>
                </div>
                <div className='img-format'>
                    <img className="img-box" src={headshot} alt="Headshot"></img>
                </div>
            </div>
        </div>
      </Slide>
    </div>
  );
}
export default Welcome;
