import React, { useState, useEffect, useRef } from 'react';
import './Resume.css'
import Slide from '@mui/material/Slide';

const ResumeBanner = ({image, company, text}) =>{
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
            threshold: .1,
        }
        );

        if (targetRef.current) {
        observer.observe(targetRef.current);
        }
        
        return () => observer.disconnect();
    }, []); 
    
    return(
        <div ref={targetRef}>
            <Slide direction="up" in={isVisible} mountOnEnter timeout={1300}>
                <div class="banner">
                    <div class="image-container">
                        <img src={image} alt="Work Experience"></img>
                    </div>
                    <h3>{company}</h3>
                    <p>{text}</p>
                </div>  
            </Slide>
        </div>
        
        
    );
}

export default ResumeBanner;