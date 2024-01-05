import React from 'react';
import './Navbar.css';
import profileImg from './images/education/profile_grad.jpg';
import Resume from './images/resume/Alexander_Le_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';


const buttonStyle = {
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    padding: '5px',
    margin: '5px 0',
    cursor: 'pointer',
    borderRadius: '5px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#777',
    },
  };

const toggleStyle = {
    margin: '5px',
    cursor: 'pointer'
  };

const VerticalNavbar = () => {
    return (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <div className="vertical-navbar">
                <div className="profile-container">
                    <img className="profile-image" src={profileImg} alt="Contact 1" />
                    <h1>Alexander K. Le</h1>
                    <div className="contact-buttons">
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
                    <Button variant="contained" sx={buttonStyle}>
                        Hobbies
                    </Button>
                    <Button variant="contained" sx={buttonStyle}>
                        Alex GPT
                    </Button>
                    <Button variant="contained" sx={buttonStyle}>
                        Contact
                    </Button>
                </div>
                
                <div className="light-dark-mode">
                    <p>Light/Dark Mode</p>
                    <Switch sx={toggleStyle} defaultChecked />
                </div>
            </div>
        </Slide>
    );
};

export default VerticalNavbar;
