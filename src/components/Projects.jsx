// Projects.jsx
import React, { useRef } from 'react';
import movieAppImage from '../assets/movie-app-image.png';
import quizNightTimerImage from '../assets/quiz-night-timer-image.png';
import foodTrackerAppImage from '../assets/food-tracker-app-image.png';
import ticTacToeImage from '../assets/tic-tac-toe-image.png';
import toDoListReactImage from '../assets/to-do-list-app-react.png';
import quizNightClickableImage from '../assets/quiz-night-clickable-image.png';
import weatherAppImage from '../assets/weather-app-image.png';
import toDoListAppImage from '../assets/to-do-list-app.png';
import fundMeAfterImage from '../assets/web3-fund-me-frontend-after.png';
import '../styles/Projects.css';
import useOnScroll from './useOnScroll';
import ProjectItem from './ProjectItem';


function ScrollingVisibleWrapper({ children }) {
  const ref = useRef();
  const isVisible = useOnScroll(ref);

  return (
    <div 
        className="scrolling-visible-wrapper"
        ref={ref} 
        style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
    >
        {children}
    </div>
);
 
}




function Projects() {
  return (
    <section className="projects" id="projects">
    <h2>My Portfolio Projects.</h2>
    <div className="project-list">
                  <ScrollingVisibleWrapper>
        <ProjectItem
          image={movieAppImage}
          name="01. E-Commerce Movie App"
          description="A E-commerce site with a Netflix inspired design. User can add movies to their shopping cart and go though the checkout process. The API also fetches movie information to categorise them by genre, giving ratings, descriptions and setting prices based on release date."
          languages={['React', 'Vite', 'API', 'CSS', 'JavaScript']}
          githubLink="https://github.com/JamesSymes/E-Commerce-Movie-App"
          appLink="https://jamessymes.github.io/E-Commerce-Movie-App/"
          readMoreLink="/projects/movie-app"
        />
                      </ScrollingVisibleWrapper>
                      <ScrollingVisibleWrapper>
        <ProjectItem
          image={fundMeAfterImage}
          name="02. Web3 Fund Me Frontend"
          description="Smart Contract Fund Me Frontend that works with a Backend Smart Contract that I deployed to the Sepolia testnet. I didn't write the backend code, only deployed it."
          languages={['Web3', 'HTML', 'CSS', 'JavaScript', 'Mobile Interface']}
          githubLink="https://github.com/JamesSymes/web3-fund-me-frontend"
          appLink="https://jamessymes.github.io/web3-fund-me-frontend/"
          readMoreLink="/projects/web3-fund-me"
        />
                        </ScrollingVisibleWrapper>
                        <ScrollingVisibleWrapper>
                        <ProjectItem
          image={quizNightClickableImage}
          name="03. Quiz Night - 1.0 Original"
          description="The original Quiz Night App has been a hit among my friends and family. Many find it so engaging that they play multiple rounds. This version features challenging questions from an API."
          smartContractlink="https://sepolia.etherscan.io/address/0xc4400C21Ae2276EA086963004e83A2eFD3EE831c"
          languages={['HTML', 'CSS', 'JavaScript', 'API']}
          githubLink="https://github.com/JamesSymes/Quiz-Night"
          appLink="https://jamessymes.github.io/Quiz-Night/"
          readMoreLink="/projects/quiz-night-app"
        />
                        </ScrollingVisibleWrapper>
                <ScrollingVisibleWrapper>
        <ProjectItem
          image={quizNightTimerImage}
          name="04. Quiz Night App - 2.0 TV Version"
          description="I created this app upon a restaurant owner's request, inspired by my original Quiz Night App. The owner wanted the app displayed on a TV for non-interactive customer participation. Hence, I integrated a timer bar and introduced true/false questions."
          languages={['TV Interface', 'React', 'Vite', 'API', 'CSS', 'JavaScript']}
          githubLink="https://github.com/JamesSymes/Quiz-Night-Timer"
          appLink="https://jamessymes.github.io/Quiz-Night-Timer/"
          readMoreLink="/projects/Quiz-Night-Timer"
        />
                        </ScrollingVisibleWrapper>



                <ScrollingVisibleWrapper>
        <ProjectItem
          image={foodTrackerAppImage}
          name="05. Food Tracker App"
          description="I developed this app for health and fitness enthusiasts like myself. It helps users monitor daily calorie and protein intake. Users can manage meals, update values, and the app will automatically recalculate the totals."
          languages={['HTML', 'CSS', 'JavaScript', 'Mobile Interface']}
          githubLink="https://github.com/JamesSymes/Calories-And-Protein-Tracker"
          appLink="http://jamess530.sg-host.com/"
          readMoreLink="/projects/food-tracker"
        />
                        </ScrollingVisibleWrapper>
                <ScrollingVisibleWrapper>
        <ProjectItem
          image={toDoListReactImage}
          name="06. ToDo-List"
          description="This app, a revised version of my original ToDo-List, was my first project using React. I added features like marking tasks as complete."
          languages={['React', 'Vite', 'CSS', 'JavaScript']}
          githubLink="https://github.com/JamesSymes/ToDo-List-React"
          appLink="https://jamessymes.github.io/ToDo-List-React/"
          readMoreLink="/projects/to-do-list-react"
        />
                        </ScrollingVisibleWrapper>
                <ScrollingVisibleWrapper>
        <ProjectItem
          image={toDoListAppImage}
          name="07. To-Do List App"
          description="This standard learning tool was designed due to its popularity among developers."
          languages={['HTML', 'CSS', 'JavaScript']}
          githubLink="https://github.com/JamesSymes/ToDo-List"
          appLink="https://jamessymes.github.io/ToDo-List/"
          readMoreLink="/projects/to-do-list"
        />
                        </ScrollingVisibleWrapper>
                <ScrollingVisibleWrapper>
        <ProjectItem
          image={weatherAppImage}
          name="08. Weather App"
          description="I built this app using an API for weather data. GIF images are set as backgrounds based on the current weather, offering a contemporary touch."
          languages={['React', 'Vite', 'API', 'CSS', 'JavaScript']}
          githubLink="https://github.com/JamesSymes/Weather-App"
          appLink="https://jamessymes.github.io/Weather-App/"
          readMoreLink="/projects/weather-app"
        />
                        </ScrollingVisibleWrapper>
                <ScrollingVisibleWrapper>
        <ProjectItem
          image={ticTacToeImage}
          name="09. Tic Tac Toe Game"
          description="This interactive Tic Tac Toe game keeps track of the scores and offers a restart option."
          languages={['HTML', 'CSS', 'JavaScript']}
          githubLink="https://github.com/JamesSymes/tic-tac-toe-game"
          appLink="https://jamessymes.github.io/tic-tac-toe-game/"
          readMoreLink="/projects/tic-tac-toe"
        />
                        </ScrollingVisibleWrapper>
                

                
        {/* Add more ProjectItems for your projects */}
      </div>
    </section>
  );
}

export default Projects;


