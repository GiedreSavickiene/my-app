import './App.css';
import CarsList from './Components/003/CarsList';
import Rainbow from './Components/003/Rainbow';

const cars = [
    'Opel',
    'MB',
    'FIAT',
    'Ford',
    'Kamaz'
]

const rainbow = [
     {color: 'crimson', size: 30, pos: 'top'},
    {color: 'orange', size: 14, pos: 'top'},
    {color: 'yellow', size: 52, pos: 'bottom'},
    {color: 'green', size: 27, pos: 'bottom'},
    {color: 'skyblue', size: 40, pos: 'top'},
    {color: 'darkblue', size: 17, pos: 'bottom'},
    {color: 'darkmagenta', size: 22, pos: 'top'}

];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Lists and Key</h1>
       
       <Rainbow colors={rainbow}></Rainbow>
             
      </header>
    </div>
  );
}

export default App;
