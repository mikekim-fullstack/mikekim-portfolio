// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
function App() {
  // console.log('process.env.REACT_APP_GMAIL_AUTH', process.env.REACT_APP_GMAIL_AUTH)
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
