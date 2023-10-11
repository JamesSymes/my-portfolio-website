// Hero.jxs
import React from 'react';
import '../styles/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-opening">Hi, my name is</p>
        <h1 className="hero-title">James Symes.</h1>
        <h2 className="hero-title-2">Frontend Web Developer</h2>
        <p className="hero-description">React | HTML | CSS | JavaScript | GitHub | vsCode | Frontend Web3</p>
        <p className="hero-description">Web developer proficient in React, HTML, CSS & JavaScript. Passionate about crafting visually cohesive and responsive interfaces. Also diving into Web3 front-end integration for smart contracts to explore the exciting world of Blockchain.</p>
        <div className="cta-buttons">
          <a href="#projects" className="cta-button">Projects</a>
          <a href="#contact" className="cta-button">Contact</a>
        </div>
        <div>
        <a href="https://github.com/JamesSymes">
    <FontAwesomeIcon icon={faGithub} className="hero-icons" />
</a>
<a href="https://www.linkedin.com/in/james-symes-720384295/">
    <FontAwesomeIcon icon={faLinkedin} className="hero-icons" />
</a>



<a href="https://wa.me/+447453283755?text=Hallo%20James,%20I%20Need%20A%20Programmer.">
                <FontAwesomeIcon icon={faWhatsapp} className="hero-icons" />
            </a>


            <a href="mailto:jjmsymes@gmail.com?subject=Hallo%20James,%20I%20Need%20A%20Programmer.">
                <FontAwesomeIcon icon={faEnvelope} className="hero-icons" />
            </a>
</div>


      </div>
      <div className="hero-sidebar">
        <div className="skill-item-container">
          <p className="skill-item skill-item-1">HTML</p>
          <p className="skill-item skill-item-2">CSS</p>
          <p className="skill-item skill-item-3">JavaScript</p>
          <p className="skill-item skill-item-4">React</p>
          <p className="skill-item skill-item-5">vsCode</p>
          <p className="skill-item skill-item-6">Web3</p>
          <p className="skill-item skill-item-7">GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
