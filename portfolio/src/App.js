import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
