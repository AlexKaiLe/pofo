import React, { useState, useEffect, useRef } from 'react';
import './Resume.css';
import Slide from '@mui/material/Slide';

const ResumeBanner = ({ image, company, position, text }) => {
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
        threshold: 0.1,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split the text along periods and create an array of bulleted list items
  const textPoints = text.split('.').map((point, index) => (
    <li key={index}>{point.trim()}</li>
  ));

  return (
    <div ref={targetRef} style={{ height: '30vh' }}>
      <Slide direction="up" in={isVisible} mountOnEnter timeout={1300}>
        <div className="banner">
          <div className="image-container">
            <img src={image} alt="Work Experience" />
          </div>
          <h2>{company}</h2>
          <p><b>{position}</b></p>
          <ul>{textPoints}</ul>
        </div>
      </Slide>
    </div>
  );
};

export default ResumeBanner;