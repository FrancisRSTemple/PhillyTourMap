
import './App.css';
import Title from './components/Title.jsx';
import map from './resources/images/map.png';

function openArtMuseum(){
  window.open('https://philamuseum.org/','blank');
}
function openPennsLanding(){
  window.open('https://www.visitphilly.com/things-to-do/attractions/penns-landing/','blank');
}
function openOldCity(){
  window.open('https://www.oldcitydistrict.org/','blank');
}
function openLovePark(){
  window.open('https://www.visitphilly.com/things-to-do/attractions/love-park/','blank');
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Philly Tour Map</Title>
      </header>

      {/*<h2 className='Map'>My Image</h2>
      <img src={map} alt="Map"/>*/}
      <body className='body'>
        <div>
        <button className="Button" onClick={openArtMuseum}>
          Art Museum
        </button>
        </div>
        <br>
        </br>
        <div>
        <button className="Button" onClick={openPennsLanding}>
          Penns Landing
        </button>
        </div>
        <br>
        </br>
        <div>
        <button className="Button" onClick={openOldCity}>
          Old City
        </button>
        </div>
        <br>
        </br>
        <div>
        <button className="Button" onClick={openLovePark}>
          Love Park
        </button>
        </div>
      </body>
      <header className='header'>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      </header>
    </div>
  );
}

export default App;
