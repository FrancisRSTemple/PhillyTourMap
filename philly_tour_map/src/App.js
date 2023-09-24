
import './App.css';
import Title from './components/Title.jsx';
import map from './resources/images/map.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Philly Tour Map</Title>
      </header>

      <h2 className='Map'>My Image</h2>
      <img src={map} alt="Map"/>
    </div>
  );
}

export default App;
