
import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import FeaturedProjects from './components/FeaturedProjects';
import NewProjects from './components/NewProjects';
import CompletedProjects from './components/CompletedProjects';
import OngoingProjects from './components/OngoingProjects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Contact/>
      <FeaturedProjects/>
      <NewProjects/>
      <CompletedProjects/>
      <OngoingProjects/>
    </div>
  );
}

export default App;
