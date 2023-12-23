import React, { useEffect, useState, useRef } from 'react';
import './Content.css';
import img_1 from './images/1.png'; 
import img_2 from './images/2.png'; 
import img_3 from './images/3.png'; 
import img_4 from './images/4.png'; 
import img_5 from './images/5.png'; 
import img_6 from './images/6.png'; 
import img_7 from './images/7.png'; 

import Runner from './Runner';
import Welcome from './Welcome';
import Resume from './Resume';
import Skills from './Skills';


const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];

const Content = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (isHovered) {
        const scrollSpeed = 2;
        const container = document.getElementById('scroll-container');
        container.scrollLeft += event.deltaY * scrollSpeed;
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isHovered]);
    
  const scrollingDivRef = useRef(null);

  const handleWheel = (event) => {
    if (scrollingDivRef.current) {
      // event.preventDefault();
      scrollingDivRef.current.scrollTop += event.deltaY;
      scrollingDivRef.current.scrollLeft += event.deltaX;
    }
  };

  return (
    <div className={`content-container ${isHovered ? 'scrollable' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      
      <div id="scroll-container" className="scroll-container">
        <div className="container">
          <div className="content">
            <Welcome/>
            <Resume/>
            <Skills/>
            <div className="content-block-1">
            </div>
              
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
          </div>
          
          <div className="runner-container" onWheel={handleWheel}>
            <Runner className="runner" images={images} isHovered={isHovered} handleWheel={handleWheel}/>
          </div>
          <div className="landscape" ref={scrollingDivRef}>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Content;
