import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-5xl font-sans font-normal pt-6 text-black-50">Alexis Crandall</h1>
      </header>
      <div className="bg-contain min-h-screen" style={{backgroundImage: "url(/background.jpg)"}}>
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