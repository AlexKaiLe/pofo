import React, { useState, useEffect } from 'react';
import './Runner.css';

const ImageAnimation = ({ images, isHovered}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsAnimating] = useState(false);
  const [isScrollingBackwards, setIsScrollingBackwards] = useState(false);

  useEffect(() => {
    let intervalId;
    let isScrolling = false;

    const handleScroll = (event) => {
      if (isHovered) {
        const deltaY = event.deltaY;
        const deltaX = event.deltaX;

        if (!isScrolling) {
          isScrolling = true;
          setIsAnimating(true);

          intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 50);
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          setIsAnimating(false);
          clearInterval(intervalId);
        }, 200);

        const horizontal = Math.abs(deltaX)/Math.abs(deltaY) > 1
        const vertical = Math.abs(deltaY)/Math.abs(deltaX) > 1

        if (horizontal){
          setIsScrollingBackwards(deltaX < 0);
        } 
        if (vertical){
          setIsScrollingBackwards(deltaY < 0);
        }
      };
    }

    let scrollTimeout;
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearInterval(intervalId);
    };
  }, [images, isHovered]);

  const imageStyle = {
    cursor: 'pointer',
    transform: isScrollingBackwards ? 'scaleX(-1)' : 'scaleX(1)',
  };

  return (
    <div style={imageStyle}>
      <img className="image-animation" src={images[currentIndex]} alt={`${currentIndex + 1}`} />
    </div>
  );
};

export default ImageAnimation;
