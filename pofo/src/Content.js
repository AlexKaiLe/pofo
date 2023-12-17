import React, { useEffect } from 'react';
import './Content.css';

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
            <div className="content">
              <div className="overflow-blocks">
                <div className="overflow-block">Hello</div>
                <div className="overflow-block"></div>
                <div className="overflow-block"></div>
                <div className="overflow-block"></div>
                <div className="overflow-block"></div>
                <div className="overflow-block"></div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Content;