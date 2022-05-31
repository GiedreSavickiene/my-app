import './App.scss';
import Antras from './Components/006/Antras';
import Kvadratas from './Components/006/Kvadratas';
import Raide from './Components/006/Raide';
import Vienas from './Components/006/Vienas';


const labas = [

    'L',
    'a',
    'b',
    'a',
    's',
    ',',
    ' ',
    'v',
    'a',
    'i',
    'k',
    'a',
    'i',
    '!'
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Labas</h1>
       <Vienas number={2} color='pink' className='big'></Vienas>
       <Antras number1={10}color1='yellow' className='small'></Antras>
       <Kvadratas color1='gray' color2="pink" show='k'></Kvadratas>
       <Raide list={labas}></Raide>
        <div className='letters'>
       {labas.map((l, i) => <Raide key={i} l={l} i={i}></Raide>)}
       </div>
       
      </header>
    </div>
  );
}

export default App;
