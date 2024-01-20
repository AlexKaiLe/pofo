import React, { useState, useEffect, useRef } from 'react';

import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import ProjectsBanner from './ProjectsBanner'

import Google from './images/projects/google.png'
import melanoma from './images/projects/melanoma.png'
import maestro from './images/projects/maestro.png'
import yoki from './images/projects/yoki.png'
import harvard from './images/projects/harvard.png'
import genome from './images/projects/genome.png'
import biomaterials from './images/projects/biomaterials.png'
import shoemaking from './images/projects/shoemaking.png'
import biodesign from './images/projects/biodesign.png'
import lighting from './images/projects/lighting.png'

const Projects = ({setIsHovered, theme}) => {

    const GoogleComponent = () => {
        return (
            <div >
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

    const buttonStyle = {
        margin: '2vh 2vw',
        width: '175px',
        height: '175px',
        cursor: 'pointer',
        borderRadius: '10px',
        textTransform: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        transition: 'box-shadow 0.5s ease',
        backgroundColor: theme.palette.cards.main,
        color: 'black',
        '&:hover': {
            background: theme.palette.navbar.main,
            transition: 'box-shadow 0.5s ease',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.8)',
        },
    };

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
        <div className='projects-content' >
            <div id='PROJECTS_PAGE' className='projects-page' style={{color: theme.palette.light_dark.main}}>
                <h1>Projects</h1>
            </div>
            <div ref={targetRef}>
                <Slide direction="down" in={isVisible} mountOnEnter timeout={2000}>
                    <div className='button-container'>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleGoogle} style={{color: theme.palette.light_dark.main}}>
                            <img src={Google} alt='google'></img>
                            Google Biodesign
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={melanoma} alt='melanoma'></img>
                            Debiasing Melanoma
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={maestro} alt='maestro'></img>
                            AI Maestro
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={yoki} alt='yoki'></img>
                            Yoki Friends
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={harvard} alt='harvard'></img>
                            NSF Neuroscience
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={genome} alt='genome'></img>
                            Genome Assembly
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={biomaterials} alt='biomaterials'></img>
                            Biomaterials
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={shoemaking} alt='shoemaking'></img>
                            Shoe Making
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={biodesign} alt='biodesign'></img>
                            NYC Biodesign
                        </Button>
                        <Button variant="contained" className='popup-button' sx={buttonStyle} onClick={toggleMelanoma} style={{color: theme.palette.light_dark.main}}>
                            <img src={lighting} alt='lighting'></img>
                            Lighting Design
                        </Button>
                    </div>
                </Slide>
            </div>
            <ProjectsBanner
                    Component={GoogleComponent}
                    isPopupOpen={isPopupGoogle}
                    togglePopup={toggleGoogle}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    theme={theme}
                />
                <ProjectsBanner
                    Component={MelanomaComponent}
                    isPopupOpen={isPopupMelanoma}
                    togglePopup={toggleMelanoma}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    theme={theme}
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