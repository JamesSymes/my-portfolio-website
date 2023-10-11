import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const lastScrollY = useRef(0);
  
  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    if (window.location.pathname === '/') {
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => {
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHidden(false);
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    
      lastScrollY.current = window.scrollY;
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
      <div className="logo">JS</div>

      <label className="hamburger-menu">
        <input
          type="checkbox"
          checked={isMenuOpen} 
          onChange={(e) => setIsMenuOpen(e.target.checked)} 
        />
      </label>

      <aside className="sidebar"> 
        <nav>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => handleLinkClick('#home')}>Home</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('#projects')}>Projects</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('#skills')}>Skills</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('#web3')}>Web3</Link></li>
            <li><Link to="/" onClick={() => handleLinkClick('#about')}>About</Link></li>
            <li className="contact-container"><Link className="contact-link" to="/" onClick={() => handleLinkClick('#contact')}>Contact</Link></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}


export default Header;


          

// function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = (e) => {
//     e.stopPropagation(); // Prevents event from bubbling up to the document
//     setDropdownVisible(!dropdownVisible);
//   };

           {/* If you want to use a MetaMask Payment */}
           {/* <li onClick={toggleDropdown} className="payme-container">
            <a href="#payme" className="payme-link">MetaMask</a>
            {dropdownVisible && (
        <div className="dropdown" ref={dropdownRef}>
          <p>If we have already spoke you can pay now in Eth by clicking the icon.</p>
          <svg className="icon-ethereum" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M16,0 L1,28 L16,32 L31,28 L16,0 Z M16,18.5 L6.437,11 L16,5.5 L25.563,11 L16,18.5 Z M6.5,13.75 L16,21 L25.5,13.75 L16,24.5 L6.5,13.75 Z"/>
          </svg>
          <p>Contact me for other payment methods.</p>
        </div>
            )}
          </li> */}