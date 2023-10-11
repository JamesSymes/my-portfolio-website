import React, { useRef } from 'react';
import '../styles/Web3.css';
import useOnScroll from './useOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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


function Web3() {
  return (
    <section className="web3" id="web3">
      <ScrollingVisibleWrapper>
      <h2>Web3</h2>
      <div className="web3-content"> 
  <p className="web3-description">
    


In the realm of Web3 and NFTs, I believe in transparency about my expertise. While I have a solid grasp of the basics, I'm continually expanding my knowledge. My strength currently lies in frontend development for Web3 projects.

You're welcome to explore my Web3 & NFT projects on GitHub. Many of these are inspired by the <a className="fcc-link" href="https://github.com/smartcontractkit/full-blockchain-solidity-course-js">FFC Full Blockchain Solidity Course JS with Patrick Collins</a>
  </p>
  <a href="https://github.com/JamesSymes">
    <FontAwesomeIcon icon={faGithub} className="icons" />
</a>
</div>
      </ScrollingVisibleWrapper>
    </section>
  );
}

export default Web3; 