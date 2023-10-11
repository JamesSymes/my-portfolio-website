import React from 'react';
import WeatherAppImage from '../assets/weather-app-image.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function WeatherAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={WeatherAppImage} alt="E-Commerce Movie App" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/Weather-App/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/Weather-App">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/Weather-App/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>

          
</div>

 



<div className="project-page-content">
                <h1>Weather App</h1>
                <p>I built this app using an API for weather data. GIF images are set as backgrounds based on the current weather, offering a contemporary touch.</p>
                
                <h3>Features:</h3>
                <li>Search for any city - Note: Ambiguous city names might cause mix-ups.</li>
                <h3>Display includes:</h3>
        <li>Area name.</li>
        <li>Temperature.</li>
        <li>Weather description.</li>
        <li>Relevant GIF background.</li >

                
                
            </div>
        </div>
    );
}

export default WeatherAppPage;
