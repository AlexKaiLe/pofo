import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import Slide from '@mui/material/Slide';

const Skills = ({text, data}) => {
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
    console.log(data)
    return(
        <div ref={targetRef}>
            <Slide direction="down" in={isVisible} mountOnEnter timeout={1300}>
                <div className='skills-list'>
                    <h3>{text}</h3>
                    <div className='skills-box'>
                        {data && data.map((item, index) => (
                            <div className='skills' key={index}>
                                <img className='skills-img' src={item.imageUrl} alt={`${index + 1}`} />
                                <p>{item.description}</p>
                            </div>
                            ))}
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default Skills;