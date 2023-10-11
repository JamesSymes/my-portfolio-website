import React from 'react';
import movieAppImage from '../assets/movie-app-image.png';
import '../styles/ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function MovieAppPage() {
    return (
        <div className="project-page">
            <div className="project-page-header">
    <img className="project-image-content" src={movieAppImage} alt="E-Commerce Movie App" />
    <div className="overlay">
        <a href="https://jamessymes.github.io/E-Commerce-Movie-App/" target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>
        
    </div>
</div>

<div className="project-page-links">

<a href="https://github.com/JamesSymes/E-Commerce-Movie-App">
    <FontAwesomeIcon icon={faGithub} className="project-page-icons" />
</a>

<a href="https://jamessymes.github.io/E-Commerce-Movie-App/">
    <FontAwesomeIcon icon={faExternalLinkAlt} className="project-page-icons" />
</a>


</div>





            <div className="project-page-content">
                <h1>E-Commerce Movie App</h1>
                <p>A E-commerce site with a Netflix inspired design. User can add movies to their shopping cart and go though the checkout process. The API also fetches movie information to categorise them by genre, giving ratings, descriptions and setting prices based on release date. </p>
                
                <h3>Features:</h3>
                <li>Movie Information Pages</li>
        <li>Site automatically updates based on Movie API </li>
        <li>Add to Cart</li>
        <li>Cart Total Displayed In Top Right Corner</li>
        <li>In Cart Users Can Add/ Take Away and Delete which automatically updates Subtotal</li>
        <li>Checkout By Clicking The Cart </li>
        <li>Genres Tab with dropdown showing different Movie Genres to choose from</li>
        <li>Hover buttons - Add To Cart, Information Icon and a button symbol on right side movie selections to see more.</li>
        <h3>Checkout Pages/ Process</h3>
        <li>Checkout - Name, Address, Shipping Options and updated Subtotals</li>
        <li>Card Information - User fill in card details </li>
        <li>Review Page - Showing all previously entered information before placing order.</li>
        <li>Conformation Page - Giving order summery with a order number </li>

                
            </div>
        </div>
    );
}

export default MovieAppPage;


