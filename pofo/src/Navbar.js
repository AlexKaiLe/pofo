import React from 'react';
import './Navbar.css';
import profileImg from './images/profile_grad.jpg';
import Resume from './images/Alexander_Le_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const VerticalNavbar = () => {
    return (
        <div className="vertical-navbar">
            <div className="profile-container">
                
                <img className="profile-image" src={profileImg} alt="Contact 1" />
                <h1>Alexander Le</h1>
                <div className="contact-buttons">
                    <a href="https://www.linkedin.com/in/alexkaile/">
                        <button className="btn contact-button btn-outline-light">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} fontSize='1rem' style={{ padding: 0 }}/>
                        </button>
                    </a>
                    <a href="https://github.com/AlexKaiLe">
                        <button className="btn contact-button btn-outline-light">
                            <FontAwesomeIcon icon={['fab', 'github']} fontSize='1.25rem' style={{ padding: 0 }}/>
                        </button>
                    </a>
                    <a href="mailto:alexkaile@gmail.com">
                        <button className="btn contact-button btn-outline-light">
                            <FontAwesomeIcon icon="envelope" fontSize='1.25rem' style={{ padding: 0 }}/>
                        </button>
                    </a>
                    <a href={Resume} download="Alexander_Le_Resume.pdf">
                        <button className="btn contact-button btn-outline-light">
                            <FontAwesomeIcon icon={faFilePdf} fontSize='1.25rem' style={{ padding: 0 }}/>
                        </button>
                    </a>
                </div>
            </div>
            <FontAwesomeIcon icon="fa-regular fa-file" />
            <button className="nav-button"><p>Welcome</p></button>
            <button className="nav-button"><p>Resume</p></button>
            <button className="nav-button"><p>Projects</p></button>
            <button className="nav-button"><p>Hobbies</p></button>
            <button className="nav-button"><p>Contact</p></button>
        </div>
    );
};

export default VerticalNavbar;
