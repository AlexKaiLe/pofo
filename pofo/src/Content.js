import React, { useEffect, useState, useRef } from 'react';
import './Content.css';

import runner_1 from './images/runner/1.png'; 
import runner_2 from './images/runner/2.png'; 
import runner_3 from './images/runner/3.png'; 
import runner_4 from './images/runner/4.png'; 
import runner_5 from './images/runner/5.png'; 
import runner_6 from './images/runner/6.png'; 
import runner_7 from './images/runner/7.png'; 

import axol_1 from './images/axolotl/1.png'; 
import axol_2 from './images/axolotl/2.png'; 
import axol_3 from './images/axolotl/3.png'; 
import axol_4 from './images/axolotl/4.png'; 
import axol_5 from './images/axolotl/5.png'; 
import axol_6 from './images/axolotl/6.png'; 
import axol_7 from './images/axolotl/7.png'; 
import axol_8 from './images/axolotl/8.png'; 
import axol_9 from './images/axolotl/9.png'; 
import axol_10 from './images/axolotl/10.png'; 
import axol_11 from './images/axolotl/11.png'; 
import axol_12 from './images/axolotl/12.png'; 
import axol_13 from './images/axolotl/13.png'; 
import axol_14 from './images/axolotl/14.png'; 
import axol_15 from './images/axolotl/15.png'; 
import axol_16 from './images/axolotl/16.png'; 
import axol_17 from './images/axolotl/17.png'; 
import axol_18 from './images/axolotl/18.png'; 

import san_fran from './images/skyline/san_francisco.png'; 


import Runner from './Runner';
import Welcome from './Welcome';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact'

const runner_images = [runner_1, runner_2, runner_3, runner_4, runner_5, runner_6, runner_7];
const axolotl_images = [axol_1, axol_2, axol_3, axol_4, axol_5, axol_6, axol_7, axol_8, axol_9, axol_10, axol_11, axol_12, axol_13, axol_14, axol_15, axol_16, axol_17, axol_18];

const randomValue = Math.random();
  
  // Define your constant values in an array
const values = [axolotl_images, runner_images];

// Calculate the index based on the random number and the length of the array
const randomIndex = Math.floor(randomValue * values.length);

// Use the randomly chosen index to get the selected value
const images = values[randomIndex];

const Content = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("handleMouseEnter")
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (isHovered) {
        const scrollSpeed = 2;
        const container = document.getElementById('scroll-container');
        container.scrollLeft += event.deltaY * scrollSpeed;
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isHovered]);
    
  const scrollingDivRef = useRef(null);

  const handleWheel = (event) => {
    if (scrollingDivRef.current) {
      scrollingDivRef.current.scrollTop += event.deltaY;
      scrollingDivRef.current.scrollLeft += event.deltaX;
    }
  };


  return (
    <div id='content-container' className='content-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div id="scroll-container" className="scroll-container">
        <div className="container">
           <div className="runner-container" onWheel={handleWheel}>
            <Runner className="runner" images={images} isHovered={isHovered} handleWheel={handleWheel}/>
          </div>
          <div className="content">
            <Welcome/>
            <Resume/>
            <Skills/>
            <Projects setIsHovered={setIsHovered}/>
            <Contact/>
            {/* <div className="content-block-1"></div> */}
          </div>
          <div className="landscape" ref={scrollingDivRef}>
            <img className='content-block-2' src={san_fran} alt='san_fran'></img>
            <img className='content-block-2' src={san_fran} alt='san_fran'></img>
            <img className='content-block-2' src={san_fran} alt='san_fran'></img>
            <img className='content-block-2' src={san_fran} alt='san_fran'></img>
            <img className='content-block-2' src={san_fran} alt='san_fran'></img>
            <img className='content-block-2' src={san_fran} alt='san_fran'></img>
            {/* <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div>
            <div className="content-block-2"></div> */}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Content;
