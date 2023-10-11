import React from 'react';
import ToDoListReactAppImage from '../assets/to-do-list-app-react.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ToDoListReactAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={ToDoListReactAppImage} alt="E-Commerce Movie App" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/ToDo-List-React/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/ToDo-List-React">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/ToDo-List-React/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>

          
</div>





<div className="project-page-content">
                <h1>ToDo-List App - React Version</h1>
                <p>This app, a revised version of my original ToDo-List, was my first project using React. I added features like marking tasks as complete.</p>
                
                <h3>Features:</h3>
                <li>Add items.</li>
        <li>Check off items.</li>
        <li>Delete items.</li>

                
                
            </div>
        </div>
    ); 
} 

export default ToDoListReactAppPage;


