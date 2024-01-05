import React from 'react';
import movieAppImage from '../assets/netflix-clone-image-desktop.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function MovieAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={movieAppImage} alt="Netflix Clone React" />
    <div className="overlay">
        <a href="https://jamess650.sg-host.com/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/Netflix-Clone">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamess650.sg-host.com/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>


</div>





            <div className="project-page-content">
            <h1>Netflix Clone React - Desktop & Mobile</h1>
        <p>This project is my take on creating a Netflix-like interface. It shows my ability to replicate detailed UI designs, with a special focus on the desktop version's Movie Scroller.</p>

        <h2>What I Achieved:</h2>
        <p>I recreated the look and feel of Netflix, especially the Movie Scroller on the desktop version.</p>

        <h3>Features on Desktop:</h3>
        <ul>
            <li><strong>Movie List Scroller:</strong>
                <ul>
                    <li>Starts with a gap on the left, just like Netflix.</li>
                    <li>Scroll button appears when you start scrolling.</li>
                    <li>Smooth scrolling, and you can click again during scrolling.</li>
                    <li>Ends with a new list of movies displayed.</li>
                    <li>Half a movie image at each end of the scroll, a cool Netflix feature.</li>
                    <li>Buttons fit perfectly over these half-images on all screen sizes.</li>
                </ul>
            </li>
            <li><strong>Search Bar:</strong> I used SCSS to make it look just like Netflix’s search bar on desktop.</li>
            <li><strong>Movie Images from API:</strong> I integrated a movie image API for fresh content.</li>
            <li><strong>Notification Alert:</strong> A red bell in the top right corner shows notifications.</li>
            <li><strong>Interactive Hover Container:</strong> Secondary movie images from the API with clickable buttons.</li>
            <li><strong>Header & Hero Section:</strong> So close to the real Netflix design, it's almost deceiving!</li>
        </ul>

        <h3>Features on Mobile:</h3>
        <p>The mobile version is designed to feel like the Netflix app, with some cool features.</p>
        <ul>
            <li><strong>Categories Tab:</strong> Full-screen dropdown with different movie genres.</li>
            <li><strong>Movie Scroller:</strong> Adapted to work just like it does in the Netflix app.</li>
            <li><strong>Search Bar:</strong> Redesigned to match the Netflix app, very different from the desktop version.</li>
            <li><strong>Navigation Buttons:</strong> 'Home', 'New & Hot', and 'My Netflix' buttons stay at the bottom while you scroll.</li>
        </ul>
                   
            </div>
        </div>
    );
}

export default MovieAppPage;


