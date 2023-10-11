import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Website built by James Symes &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
 
