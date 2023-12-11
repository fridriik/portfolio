import React, { forwardRef } from "react";
import './About.css';

const About = forwardRef((props, ref) => {
  
  return (
    <div ref={ref} className='about'>
        <h2 className='header2'>ABOUT ME</h2>
        <p className='paragraph1'>
        I’m a system analyst, front-end developer apassionated for design, student of BS
        in Information Systems at the Universidad
        Nacional de General Sarmiento. My diverse
        background has provided me skills such as
        adaptability, emotional intelligence, an
        unrelenting dedication and a unique perspective
        that has allowed me to approach challenges
        from different angles.
        </p>
    </div>
  );
});

export default About;
