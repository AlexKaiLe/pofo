import React, { useEffect, useState } from 'react';
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

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];

const Content = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("enter")
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
      console.log("leave")
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
    console.log(isHovered)
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isHovered]);
    
  return (
    <div className={`content-container ${isHovered ? 'scrollable' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div id="scroll-container" className="scroll-container">
        <div className="container">
          <div className="content">
            <div className="content-block-1">
              <Welcome/>
            </div>
            <div className="content-block-1">
              <Welcome/>
            </div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
            <div className="content-block-1"></div>
          </div>
          <div className="landscape">
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
          </div>
        </div>
      </div>
      <div className="runner-container">
        <Runner className="runner" images={images} isHovered={isHovered}/>
      </div>
    </div>
  );
};

export default Content;
