import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import Slide from '@mui/material/Slide';

const Skills = ({text, Component}) => {
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
    return(
        <div ref={targetRef}>
            <Slide direction="down" in={isVisible} mountOnEnter timeout={2000}>
                <div className='skills-list'>
                    <h3>{text}</h3>
                    <Component></Component>
                </div>
            </Slide>
        </div>
    );
}

export default Skills;