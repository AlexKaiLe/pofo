import React, { useState, useEffect } from 'react';
import './Runner.css';

const ImageAnimation = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsAnimating] = useState(false);
  const [isScrollingBackwards, setIsScrollingBackwards] = useState(false);

  useEffect(() => {
    let intervalId;
    let isScrolling = false;

    const handleScroll = (event) => {
      const deltaY = event.deltaY;

      if (!isScrolling) {
        console.log('Mouse started scrolling!');
        isScrolling = true;
        setIsAnimating(true);

        intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 50);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        console.log('Mouse stopped scrolling!');
        isScrolling = false;
        setIsAnimating(false);
        clearInterval(intervalId);
      }, 200);

      // Detect scrolling direction
      setIsScrollingBackwards(deltaY < 0);
    };

    let scrollTimeout;
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearInterval(intervalId);
    };
  }, [images]);

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
