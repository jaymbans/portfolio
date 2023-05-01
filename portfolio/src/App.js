import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;
