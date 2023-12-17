import React, { useEffect } from 'react';
import './Content.css';
import img_1 from './images/1.png'; 
import img_2 from './images/2.png'; 
import img_3 from './images/3.png'; 
import img_4 from './images/4.png'; 
import img_5 from './images/5.png'; 
import img_6 from './images/6.png'; 
import img_7 from './images/7.png'; 
import Runner from './Runner';

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];

const Content = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      const scrollSpeed = 2;
      const container = document.getElementById('scroll-container');
      container.scrollLeft += event.deltaY * scrollSpeed;
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="content-container">
      <div id="scroll-container" className="scroll-container">
        <div className="container">
          <div className="content">
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
            <div className="overflow-block"></div>
          </div>
        </div>
      </div>
      <div className="runner-container">
        <Runner className="runner" images={images} />
      </div>
    </div>
  );
};

export default Content;
