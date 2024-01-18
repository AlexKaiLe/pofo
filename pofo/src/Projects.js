import React, { useState, useEffect, useRef } from 'react';

import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import ProjectsBanner from './ProjectsBanner'

import RISD from './images/education/RISD.png'
import Google from './images/projects/google.png'
import melanoma from './images/projects/melanoma.png'
import maestro from './images/projects/maestro.png'


const buttonStyle = {
    margin: '2vh 2vw',
    width: '200px',
    height: '200px',
    cursor: 'pointer',
    borderRadius: '10px',
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    transition: 'box-shadow 0.5s ease',
    background: 'white',
    color: 'black',
    '&:hover': {
        background: 'lightgrey',
        transition: 'box-shadow 0.5s ease',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.8)',
    },
};

const GoogleComponent = () => {
    return (
        <div>
            <h2>Google Biodeign</h2>
            <div className="popup-body">
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
    );
};

const MelanomaComponent = () => {
    return (
        <div>
            <h2>Melanoma</h2>
            <div className="popup-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (Add more content as needed)</p>
            </div>
        </div>
    );
};

const Projects = ({setIsHovered}) => {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPopupGoogle, setPopupGoogle] = useState(false);
    const [isPopupMelanoma, setPopupMelanoma] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toggleGoogle = () => {
        setIsHovered(false);
        setPopupGoogle(!isPopupGoogle);
    };

    const toggleMelanoma = () => {
        setIsHovered(false);
        setPopupMelanoma(!isPopupMelanoma);
    };

    

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

    return (
        <div className='projects-content'>
            <div id='PROJECTS_PAGE' className='projects-page'>
                <h1>Projects</h1>
            </div>
            <div ref={targetRef}>
                <Slide direction="down" in={isVisible} mountOnEnter timeout={2000}>
                    <div className='button-container'>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleGoogle}><img src={Google} alt='google'></img>Google Biodesign</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={melanoma} alt='melanoma'></img>Debiasing Melanoma</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={maestro} alt='maestro'></img>AI Maestro</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Yoki Friends</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Harvard Neuroscience</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Genome Assembly</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Biomaterials</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Shoe Making</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>NYC Biodesign</Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Lighting Design</Button>
                    </div>
                </Slide>
            </div>
            <ProjectsBanner
                    Component={GoogleComponent}
                    isPopupOpen={isPopupGoogle}
                    togglePopup={toggleGoogle}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
                <ProjectsBanner
                    Component={MelanomaComponent}
                    isPopupOpen={isPopupMelanoma}
                    togglePopup={toggleMelanoma}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
            <div>
                {/* <ProjectsBanner
                    Component={GoogleComponent}
                    isPopupOpen={isPopupGoogle}
                    togglePopup={toggleGoogle}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                /> */}
                {/* <ProjectsBanner
                    Component={MelanomaComponent}
                    isPopupOpen={isPopupMelanoma}
                    togglePopup={toggleMelanoma}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                /> */}
            </div>
        </div>
    );
}

export default Projects;