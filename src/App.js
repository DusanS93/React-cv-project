import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Workplaces from './pages/Workplaces';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div id="wrapper">
      <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="education" element={<Education />} />
              <Route path="workplaces" element={<Workplaces />} />
              <Route path="skills" element={<Skills />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
      <Footer />
    </div>
  );
}

export default App;
