import './App.css';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="bg-contain min-h-screen" style={{ backgroundImage: "url(/background.jpg)" }}>
       <div>Hello my name is Alexis Crandall</div>
       <div>Fullstack Software Engineer</div>
        <SocialMedia/>
      </div>
    </div>
  );
}

export default App;