import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProjectsBanner from './ProjectsBanner'

import RISD from './images/education/RISD.png'


const buttonStyle = {
    margin: '2vh 2vw',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '10px',
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '&:hover': {},
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

const Projects = ({setIsHovered}) => {
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

    return (
        <div className='projects-content'>
            <div id='PROJECTS_PAGE'>
                <h1>Projects</h1>
            </div>
            <div className='button-container'>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleGoogle}><img src={RISD} alt='RISD'></img>Google Biodesign</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Melanoma</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Maestro</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Yoki</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Harvard Neuroscience</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Genome Assembly</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Biomaterials</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Shoe Making</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>NYC Biodesign</Button>
                <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma}><img src={RISD} alt='RISD'></img>Lighting Design</Button>
            </div>
            <div>
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
            </div>
        </div>
    );
}

export default Projects;