import React, { useRef } from 'react';
import '../styles/Skills.css';
import useOnScroll from './useOnScroll';

function ScrollingVisibleWrapper({ children }) {
  const ref = useRef();
  const isVisible = useOnScroll(ref);

  return (
    <div 
        className="scrolling-visible-wrapper"
        ref={ref} 
        style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
    >
        {children}
    </div>
);

}

function Skills() {
  return (
    <section className="skills" id="skills">
      <ScrollingVisibleWrapper>
      <h2>Skills</h2>
      <p>I would not cliam to be fluent in anything. What I am is a problem solver. I figure out a way to get things done and have moved that into programming. An although I am currently focusing on programming, I also have some other notworthy skills such as WP and SEO.</p>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>API</li>
        <li>Web3</li>
      </ul>
      <ul className="skills-list">
        <li>React</li>
        <li>Vite</li>
        <li>SVG</li>
        <li>SEO</li>
        <li>WordPress</li>
      </ul>
      </ScrollingVisibleWrapper>
    </section>
  );
}

export default Skills;
