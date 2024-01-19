import React from 'react';
import './Navbar.css';
import profileImg from './images/education/profile_grad.jpg';
import Resume from './images/resume/Alexander_Le_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Button, Slide, CssBaseline, Switch, Container, Typography, Paper } from '@mui/material';

const toggleStyle = {
    margin: '5px',
    cursor: 'pointer'
  };

const VerticalNavbar = ({darkMode, handleThemeChange, theme}) => {
    const buttonStyle = {
        // color: theme.palette.light_dark.main,
        color: '#ffffff',
        backgroundColor: theme.palette.navbar_buttons.main,
        border: 'none',
        padding: '5px',
        margin: '5px 0',
        cursor: 'pointer',
        borderRadius: '5px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: theme.palette.navbar_buttons_hover.main,
          color: '#000000',
        },
      };
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <div className="vertical-navbar" style={{backgroundColor: theme.palette.navbar.main}}>
                <div className="profile-container" >
                    <img className="profile-image" src={profileImg} alt="Contact 1" />
                    {/* style={{color: theme.palette.light_dark.main}} */}
                    <h1>Alexander K. Le</h1>
                    <div className="contact-buttons">
                    {/* style={{color: theme.palette.light_dark.main, borderColor: theme.palette.light_dark.main}} */}
                        <a href="https://www.linkedin.com/in/alexkaile/" className="btn btn-outline-light"> 
                                <FontAwesomeIcon icon={['fab', 'linkedin']} className='fa-icon'/>
                        </a>
                        <a href="https://github.com/AlexKaiLe" className="btn btn-outline-light">
                                <FontAwesomeIcon icon={['fab', 'github']} className='fa-icon'/>
                        </a>
                        <a href="mailto:alexkaile@gmail.com" className="btn btn-outline-light">
                                <FontAwesomeIcon icon="envelope" className='fa-icon'/>
                        </a>
                        <a href={Resume} download="Alexander_Le_Resume.pdf" className="btn btn-outline-light">
                                <FontAwesomeIcon icon={faFilePdf} className='fa-icon'/>
                        </a>
                    </div>
                </div>
                <div className='nav-btn-container'>
                    <Button variant="contained" sx={buttonStyle} href='#WELCOME_PAGE'>
                        Welcome
                    </Button>
                    <Button variant="contained" sx={buttonStyle} href='#RESUME_PAGE'>
                        Resume
                    </Button>
                    <Button variant="contained" sx={buttonStyle} href='#SKILLS_PAGE'>
                        Skills
                    </Button>
                    <Button variant="contained" sx={buttonStyle} href='#PROJECTS_PAGE'>
                        Projects
                    </Button>
                    {/* <Button variant="contained" sx={buttonStyle}>
                        Alex GPT
                    </Button> */}
                    <Button variant="contained" sx={buttonStyle} href='#CONTACT_PAGE'>
                        Contact
                    </Button>
                </div>
                
                <div className="light-dark-mode">
                    <Typography variant="body1" style={{color: theme.palette.light_dark.main}}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleThemeChange}
                        color="primary"
                        name="themeSwitch"
                        sx={toggleStyle}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default VerticalNavbar;