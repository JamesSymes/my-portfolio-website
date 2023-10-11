import React, { useRef } from 'react';
import '../styles/Contact.css';
import useOnScroll from './useOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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


function Contact() {
  return (
    <section className="contact" id="contact">
      <ScrollingVisibleWrapper>
      <h2>Contact</h2> 
      <div className="contact-content">
        <p className="contact-description">
          I am currently avaible for freelancer work. Feel free to reach out to me to discuss a project via WhatsApp or Email.
        </p>
        <div>
        

<a href="https://wa.me/+447453283755?text=Hallo%20James,%20I%20Need%20A%20Programmer.">
                <FontAwesomeIcon icon={faWhatsapp} className="icons" />
            </a>


            <a href="mailto:jjmsymes@gmail.com?subject=Hallo%20James,%20I%20Need%20A%20Programmer.">
                <FontAwesomeIcon icon={faEnvelope} className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/james-symes-720384295/">
                <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </a>

            
</div>
      </div> 
      </ScrollingVisibleWrapper>
    </section>
  );
}

export default Contact;
