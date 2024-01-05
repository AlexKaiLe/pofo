import React, { useState } from 'react';
import './Projects.css';

const ProjectsBanner = ({isHovered, setIsHovered}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const togglePopup = () => {
    setIsHovered(false);
    setPopupOpen(!isPopupOpen);
    const temp = document.getElementById('content-container')
    temp.onMouseEnter = ProjectsBanner
    console.log('isHovered:', isHovered);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      {isPopupOpen && (
        <div className="popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='popup-block'></div>
          <div className="popup-content">
            <div className="popup-header">
              <span onClick={togglePopup} className="close-btn">
                &times;
              </span>
              
            </div>
            <h2>Hello there</h2>
            <div className="popup-body">
              {/* Scrollable content goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsBanner;