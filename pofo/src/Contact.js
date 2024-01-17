import React, { useState, useEffect, useRef } from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStrava, faFacebook, faLinkedin, faGithub, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Slide from '@mui/material/Slide';


import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

emailjs.init("V68IFWSrLOb41io01");

const socialButton = {
    border: 'none',
    margin: '1vh 1vw',
    cursor: 'pointer',
    borderRadius: '5px',
    textTransform: 'none',
    zIndex: '1',
    '&:hover': {
    },
};

const emailButton = {
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textTransform: 'none',
    backgroundColor: '#4CAF50',
    margin: '2vh 0 0 0',
    zIndex: '1',
    '&:hover': {
        backgroundColor: '#048707'
    },
};

const iconStyle = {
fontSize: '1.5rem', // Adjust the icon size
marginRight: '0.5rem', // Add spacing between icon and text
};

const ContactForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            });
        },
        {
            threshold: 0.1,
        }
        );

        if (targetRef.current) {
        observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s8fqttn', 'template_ijsl5db', e.target, 'V68IFWSrLOb41io01')
        .then((result) => {
            console.log(result.text);
            window.alert("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
            window.alert("Email was unable to send!\nPlease email alexkaile@gmail.com directly");
        });
        e.target.reset();
    };

  

  return (
    <div className='contact-content'>
        <div id='CONTACT_PAGE' className='contact-page'>
            <h2>Contact Me</h2>
        </div>
        <div ref={targetRef}>
            <Slide direction="up" in={isVisible} mountOnEnter timeout={1300}>
                <div className='slide-container'>
                    
                    <div className="contact-container">
                        <form onSubmit={sendEmail} className="contact-form">
                            <div className='contact-elements'>
                                <label className="contact-spacing">Name:</label>
                                <input type="text" name="from_name" required className="contact-input" />
                            </div>

                            <div className='contact-elements'>
                                <label className="contact-spacing">Email Address:</label>
                                <input type="email" name="from_email" required className="contact-input" />
                            </div>

                            <div className='contact-elements'>
                                <label className="contact-spacing">Message:</label>
                                <textarea name="message" required className="textarea" />
                                <Button variant='contained' sx={emailButton} type="submit" className="email-button">Send Email</Button>
                            </div>

                            
                        </form>
                    </div>
                    <div className='center-socials'>
                        <div className='contact-socials'>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faLinkedin} style={iconStyle}/>Linkedin
                            </Button>
                            <Button variant='contained' sx={socialButton} >
                                <FontAwesomeIcon icon={faGithub} style={iconStyle}/>Github
                            </Button>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faEnvelope} style={iconStyle}/>Email
                            </Button>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faFilePdf} style={iconStyle}/>Resume
                            </Button>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faFacebook} style={iconStyle}/>Facebook
                            </Button>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faInstagram} style={iconStyle}/> Instagram
                            </Button>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faTwitter} style={iconStyle}/> Twitter
                            </Button>
                            <Button variant='contained' sx={socialButton}>
                                <FontAwesomeIcon icon={faStrava} style={iconStyle}/> Strava
                            </Button>
                        </div>
                    </div>
                </div>
            </Slide>
            
        </div>
    </div>
    
  );
};

export default ContactForm;