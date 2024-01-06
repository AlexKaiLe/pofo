import React, { useState, useEffect, useRef } from 'react';
import './Resume.css';
import Slide from '@mui/material/Slide';

const ResumeBanner = ({Component, BannerStyle}) => {
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

  return (
    <div ref={targetRef} className={BannerStyle}>
      <Slide direction="up" in={isVisible} mountOnEnter timeout={1300}>
        <div>
          <Component/>
        </div>
      </Slide>
    </div>
  );
};

export default ResumeBanner;