// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Web3 from './components/Web3';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetflixClone from './projectPages/NetflixClone';
import MovieAppPage from './projectPages/MovieApp';
import FundMePage from './projectPages/Web3FundMeFrontend';
import QuizNightTimerPage from './projectPages/QuizNightTimer'; 
import FoodTrackerAppPage from './projectPages/FoodTrackerApp'; 
import ToDoListReactAppPage from './projectPages/ToDoListReactApp'; 
import ToDoListAppPage from './projectPages/ToDoListApp'; 
import WeatherAppPage from './projectPages/WeatherApp'; 
import TicTacToeAppPage from './projectPages/TicTacToeApp'; 
import QuizNightAppPage from './projectPages/QuizNightApp'; 

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app">
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <Router>
          <Header />
          <main>
          <Routes>
    <Route path="/" element={
        <>
            <Hero /> 
            <Projects />
            <Skills />
            <Web3 />
            <About />
            <Contact />
        </>
    } />

    <Route path="/netflix-clone-react" element={<NetflixClone />} />
    <Route path="/movie-app" element={<MovieAppPage />} />
    <Route path="/web3-fund-me" element={<FundMePage />} />
    <Route path="/Quiz-Night-Timer" element={<QuizNightTimerPage />} />
    <Route path="/quiz-night-app" element={<QuizNightAppPage />} />
    <Route path="/food-tracker" element={<FoodTrackerAppPage />} />
    <Route path="/to-do-list-react" element={<ToDoListReactAppPage />} />
    <Route path="/to-do-list" element={<ToDoListAppPage />} />
    <Route path="/weather-app" element={<WeatherAppPage />} />
    <Route path="/tic-tac-toe" element={<TicTacToeAppPage />} />
    
</Routes>


          </main>
          <Footer />
        </Router>
      )}
    </div>
  );
}
export default App;
