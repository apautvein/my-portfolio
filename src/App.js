import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="bg-contain min-h-screen" style={{ backgroundImage: "url(/background.jpg)" }}>
        <p>Visit Me On:</p>
        <a
          className="App-link"
          href="https://github.com/apautvein"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;