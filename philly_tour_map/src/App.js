
import './App.css';
import Title from './components/Title.jsx';
import map from './resources/images/map.png';
function ButtonClick(url){
  window.open(url,'blank');
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Philly Tour Map</Title>
      </header>

      <h2 className='Map'>My Image</h2>
      <img src={map} alt="Map"/>
      <button className="Button" onClick={ButtonClick}>
        hello
      </button>
    </div>
  );
}

export default App;
