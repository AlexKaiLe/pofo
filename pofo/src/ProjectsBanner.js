import React from 'react';
// import Button from '@mui/material/Button';
import './Projects.css';

const ProjectsBanner = ({Component, isPopupOpen, togglePopup, handleMouseEnter, handleMouseLeave}) => {


  return (
    <div>
      {isPopupOpen && (
        <div className="popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='popup-block'></div>
          <div className="popup-content">
            <div className="popup-header">
              <span onClick={togglePopup} className="close-btn"> &times;</span>
            </div>
            <Component/>
            <span onClick={togglePopup} className="close-btn"> &times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsBanner;