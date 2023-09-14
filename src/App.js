// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  // console.log('process.env.REACT_APP_GMAIL_AUTH', process.env.REACT_APP_GMAIL_AUTH)
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Experience />

      <Education />

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
