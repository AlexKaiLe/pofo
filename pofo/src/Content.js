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
              <h1>Left-to-Right Scrolling Website</h1>
              <p>Your content goes here...</p>
              <div className="overflow-blocks">
                <div className="overflow-block"></div>
                <div className="overflow-block"></div>
                <div className="overflow-block"></div>
                {/* Add more overflow blocks as needed */}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Content;