import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <h1>
          Example heading
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
      </div>
    </div>
  );
}

export default App;
