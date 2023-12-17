// VerticalNavbar.js
import React, { useState } from 'react';
import './Navbar.css';
import profileImg from './images/profile_grad.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const VerticalNavbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const linkedinIconStyle = { color: '#ffffff' }; // Default color
    const linkedinIconHoverStyle = { color: '#0077B5' }; // Hover color


    // <p>Computer Science</p>
    // <p>Molecular Biology</p>
    // <p>Industrial Design</p>
    return (
        <div className="vertical-navbar">
            <div className="profile-container">
                
                <img className="profile-image" src={profileImg} alt="Contact 1" />
                <h1>Alexander Le</h1>
                <div className="contact-buttons">
                    <button className="contact-button">
                        <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        style={isHovered ? linkedinIconHoverStyle : linkedinIconStyle}
                        fontSize='24px'
                        className="linkedin-icon"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}/>
                    </button>
                    <button className="contact-button">
                        <FontAwesomeIcon
                        icon={['fab', 'github']}
                        style={isHovered ? linkedinIconHoverStyle : linkedinIconStyle}
                        fontSize='24px'
                        className="linkedin-icon"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}/>
                    </button>
                    <button className="contact-button">
                        <FontAwesomeIcon
                        icon="envelope"
                        style={isHovered ? linkedinIconHoverStyle : linkedinIconStyle}
                        fontSize='24px'
                        className="linkedin-icon"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}/>
                    </button>
                    <button className="contact-button">
                        <FontAwesomeIcon
                        icon={faFile}
                        style={isHovered ? linkedinIconHoverStyle : linkedinIconStyle}
                        fontSize='24px'
                        className="linkedin-icon"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}/>
                    </button>
                </div>
            </div>
            <FontAwesomeIcon icon="fa-regular fa-file" />
            <button className="nav-button">Welcome</button>
            <button className="nav-button">Resume</button>
            <button className="nav-button">Projects</button>
            <button className="nav-button">Hobbies</button>
            <button className="nav-button">Contact</button>
        </div>
    );
};

export default VerticalNavbar;
