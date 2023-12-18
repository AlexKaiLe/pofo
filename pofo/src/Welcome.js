import React, { useState, useEffect, useRef } from 'react';
import './Welcome.css'
import Slide from '@mui/material/Slide';

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
            <div className="body">
                <div className="img-box"></div>
                <div className="img-box"></div>
                <div className="img-box"></div>
            </div>
            <div className="body">
                <div className="img-box">
                </div>
                <div className='text-box'>
                    <p>Hello there!!! Welcome to my personal website where I explore my interestes in software engineering, moleculuar biology and industrial design</p>
                </div>
            </div>
        </div>
      </Slide>
    </div>
  );
}
export default Welcome;
