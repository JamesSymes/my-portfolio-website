import React, { useState, useRef } from 'react';
import '../styles/About.css';
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





function About() {
  const [isExpanded, setExpanded] = useState(false);

  const firstParagraph = "Hello! I'm James Symes, a web developer from Surrey, England. I love building websites and apps that look great and work smoothly. I'm skilled in HTML, CSS, JavaScript, and React, and I'm currently learning more about blockchain development, focusing on Solidity and Web3.";

  const restOfContent = <><p className="about-text">For the past 11 years, I've been involved in the world of websites, starting when I helped my dad with his website due to poor service from professional agencies. This sparked my journey into web development, and I've been developing my skills ever since.</p>
    <p className="about-text">In addition to my technical skills, I have a diverse background that includes owning a Carpet Company and pursuing my passion for chess. These experiences have shaped me into a problem solver with excellent critical thinking abilities and a strong work ethic.</p>
    <p className="about-text">I'm stepping into the fascinating world of Web3. I've laid the groundwork, but there's so much more to discover. While my strength lies in frontend development, I'm eager to immerse myself deeper into blockchain to stay in tune with emerging tech trends I'm constantly pushing myself to learn and improve.</p>
    <p className="about-text">Currently, I'm expanding my knowledge in Solidity and Web3 to explore the world of blockchain development. My goal is to work as a freelancer, providing high-quality web development services while enjoying the freedom to travel. If you're looking for a dedicated web developer who is committed to technical excellence, I'd love to discuss how I can contribute to your projects. Feel free to reach out to me via WhatsApp or connect with me on LinkedIn. Let's bring your web development ideas to life!</p></>

  return (
    <section className="about" id="about">
      <ScrollingVisibleWrapper>
      <h2>About</h2>
      <div className="about-content">
        {isExpanded ? 
          <><p className="about-text">{firstParagraph}</p>{restOfContent}</> : 
          <p className="about-text">{`${firstParagraph.substring(0, 200)}... `}
            <span onClick={() => setExpanded(!isExpanded)} className="read-more-less">Read more</span>
          </p>}
        {isExpanded && <p onClick={() => setExpanded(!isExpanded)} className="read-more-less">Read less</p>}
      </div>
      </ScrollingVisibleWrapper>
    </section>
  );
}

export default About;
