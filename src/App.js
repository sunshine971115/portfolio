import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Main from './sections/Main';
import Skills from './sections/Skills';
import WhyHireMe from './sections/WhyHireMe';
import Projects from './sections/Projects';
import ContactForm from './sections/ContactForm';
function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate async data fetching or any async operation
    const fetchData = async () => {
      // Simulate delay for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading state to false after delay (simulating data loaded)
    };

    fetchData(); // Call fetchData function
  }, []);
  return (
    <div>
    {isLoading ? (
        <div className="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>

      </div>
    ) :(
    <div className="App">
      
      <Navbar/>
      <Main id="mainy" />
      <AboutMe id="aboutMey" />
      <WhyHireMe />
      <Skills id="skills" />
      <Projects id="project" />
      <ContactForm id="contact" />
    </div>
    )
  }
  </div>
  );
}

export default App;
