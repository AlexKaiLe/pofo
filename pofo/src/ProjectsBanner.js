import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { CssBaseline, Switch, Container, Typography, Paper } from '@mui/material';

import './Projects.css';

const ProjectsBanner = ({Component, isPopupOpen, togglePopup, handleMouseEnter, handleMouseLeave, theme}) => {
  
  const styleButton = {
    color: '#ffffff',
    backgroundColor: theme.palette.content_buttons.main,
    '&:hover': {
      backgroundColor: theme.palette.content_buttons_hover.main,
      color: '#000000',
    },
  };

  return (
    <div>
      {isPopupOpen && (
        // <Container component="main" maxWidth="xs" ></Container>
        <div className="popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='popup-block'></div>
          <Paper elevation={3} className="popup-content" style={{backgroundColor:theme.palette.cards.main, color:theme.palette.light_dark.main}}>
            <div className="popup-header">
              <span onClick={togglePopup} className="close-btn"> <FontAwesomeIcon icon={faX} /></span>
            </div>
            <Component/>
            <div>
              <Button variant='contained' onClick={togglePopup} sx={styleButton}>Close</Button>
            </div>
            </Paper>
        </div>
      )}
    </div>
  );
}

export default ProjectsBanner;