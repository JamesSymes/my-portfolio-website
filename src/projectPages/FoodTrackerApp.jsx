import React from 'react';
import foodTrackerAppImage from '../assets/food-tracker-app-image.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function FoodTrackerAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={foodTrackerAppImage} alt="Food Tracker App" />
    <div className="overlay">
        <a href="http://jamess530.sg-host.com/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/Calories-And-Protein-Tracker">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="http://jamess530.sg-host.com/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>

</div>


          






<div className="project-page-content">
                <h1>03. Food Tracker App</h1>
                <p>I developed this app for health and fitness enthusiasts like myself. It helps users monitor daily calorie and protein intake. Users can manage meals, update values, and the app will automatically recalculate the totals.</p>
                
                <h3>Features:</h3>
                <li>Mobile-friendly interface.</li>
                <li>Add meals - name, calories, protein.</li>
        <li>Delete meals.</li>
        <li>Edit meal details.</li>
        <li>Log meal times or other info.</li>
        <li>Drag & drop functionality.</li>
        <li>Set and edit daily calorie & protein goals.</li>
        <li>Auto-update subtotals.</li>
                
                
                
            </div>
        </div>
    );
}

export default FoodTrackerAppPage;


