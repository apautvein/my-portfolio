import './App.css';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="bg-contain min-h-screen" style={{ backgroundImage: "url(/background.jpg)" }}>
        <div className='headings flex flex-col items-center'>
          {/* working on getting this piece centered nicely */}
          <div className='text-6xl'>Hello, my name is Alexis Crandall</div>
          <div className='text-4xl'>Fullstack Software Engineer</div>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;