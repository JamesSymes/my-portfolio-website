import React from 'react';
import TicTacToeAppImage from '../assets/tic-tac-toe-image.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function TicTacToeAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={TicTacToeAppImage} alt="E-Commerce Movie App" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/tic-tac-toe-game/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/tic-tac-toe-game">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/tic-tac-toe-game/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>

          
</div>





<div className="project-page-content">
                <h1>Tic Tac Toe Game</h1>
                <p>This interactive Tic Tac Toe game keeps track of the scores and offers a restart option.</p>
                
                <h3>Features:</h3>
                <li>Game locks upon determining a winner, displaying the result.</li>
        <li>Option to restart the game.</li>
        <li>Scoreboard tracks wins for both X and O players.</li>
        <li>Rotating first move.</li>
         
                
                
            </div>
        </div>
    );
}

export default TicTacToeAppPage;
 