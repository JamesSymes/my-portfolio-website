import React from 'react';
import undMeAfterImage from '../assets/web3-fund-me-frontend-after.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function FundMePage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={undMeAfterImage} alt="Web3 Fund Me Frontend" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/web3-fund-me-frontend/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/web3-fund-me-frontend">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/web3-fund-me-frontend/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>


</div>





            <div className="project-page-content">
                <h1>Web3 Fund Me Frontend</h1>
                <p>Smart Contract Fund Me Frontend that works with a Backend Smart Contract that I deployed to the Sepolia testnet. I didn't write the backend code, only deployed it. </p>
                <p><a className="etherscan-link" href="https://sepolia.etherscan.io/address/0xc4400C21Ae2276EA086963004e83A2eFD3EE831c" target="_blank" rel="noopener noreferrer">See live contract on Etherscan</a></p>


                
            </div>
        </div>
    );
}

export default FundMePage;


