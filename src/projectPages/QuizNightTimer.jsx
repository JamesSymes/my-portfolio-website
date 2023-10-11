import React from 'react';
import quizAppImage from '../assets/quiz-night-timer-image.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function quizNightTimer() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={quizAppImage} alt="Quiz Night App - TV Version" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/Quiz-Night-Timer/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/Quiz-Night-Timer">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/Quiz-Night-Timer/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>


          
</div>





<div className="project-page-content">
                <h1>Quiz Night App - TV Version</h1>
                <p>I created this app upon a restaurant owner's request, inspired by my original Quiz Night App. The owner wanted the app displayed on a TV for non-interactive customer participation. Hence, I integrated a timer bar and introduced true/false questions.</p>
                
                <h3>Features:</h3>
                <li>Start button.</li>
        <li>Loading indicator.</li>
        <li>Choice of 4 options or true/false questions.</li>
        <li>Correct answers highlighted in green.</li>
        <li>API fetches simpler questions than the original version.</li>
        <li>Optimized for TV display.</li>
        <li>Continuous quiz play until closed.</li>

                
            </div> 
        </div>
    );
}

export default quizNightTimer;


