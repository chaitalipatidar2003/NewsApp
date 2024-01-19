import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import MyPortfolio from './components/MyPortfolio';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<MyPortfolio />} />
          <Route path="/social-links" element={<SocialLinks />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
