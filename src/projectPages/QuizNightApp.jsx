import React from 'react';
import QuizNightAppImage from '../assets/quiz-night-clickable-image.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function QuizNightAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={QuizNightAppImage} alt="Quiz Night App" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/Quiz-Night/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/Quiz-Night">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/Quiz-Night/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>

         
</div>





            <div className="project-page-content">
                <h1>Quiz Night App - Original Version</h1>
                <p>The original Quiz Night App has been a hit among my friends and family. Many find it so engaging that they play multiple rounds. This version features challenging questions from an API.</p>
                
                <h3>Features:</h3>
                <li>Custom "Quiz Night" logo with a glowing effect.</li>
        <li>Dark-themed background.</li>
        <li>Start button.</li>
        <li>Loading indicator.</li>
        <li>10 challenging questions with 4 options each.</li>
        <li>Interactive answer selection.</li>
        <li>Correct answers in green, wrong ones in red.</li>
        <li>Score display after completion.</li>
        <li>"Start New Quiz" option.</li>
                 
                
            </div>
        </div>
    );
}

export default QuizNightAppPage;
