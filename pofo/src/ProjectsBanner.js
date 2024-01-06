import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

import './Projects.css';

const ProjectsBanner = ({Component, isPopupOpen, togglePopup, handleMouseEnter, handleMouseLeave}) => {


  return (
    <div>
      {isPopupOpen && (
        <div className="popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='popup-block'></div>
          <div className="popup-content">
            <div className="popup-header">
              <span onClick={togglePopup} className="close-btn"> <FontAwesomeIcon icon={faX} /></span>
            </div>
            <Component/>
            <div>
              <Button variant='contained' onClick={togglePopup}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsBanner;