import React from 'react';
import ToDoListAppImage from '../assets/to-do-list-app.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ToDoListAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={ToDoListAppImage} alt="E-Commerce Movie App" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/ToDo-List/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/ToDo-List">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/ToDo-List/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>

          
</div>





<div className="project-page-content">
                <h1>To-Do List App</h1>
                <p>This standard learning tool was designed due to its popularity among developers.</p>
                
                <h3>Features:</h3>
                <li>Add items.</li>
        <li>Delete items.</li>
                
                
            </div>  
        </div>
    );
}

export default ToDoListAppPage;


