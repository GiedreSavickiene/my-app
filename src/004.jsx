import './App.css';
import FatCat from './Components/004/FatCat';
import FatDog from './Components/004/FatDog';
import Fish from './Components/004/Fish';
import Lake from './Components/004/Lake';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>State</h1>
       <FatCat color='Brown'></FatCat>
       <FatDog color ='blue'></FatDog>
       <Lake></Lake>
       <Fish></Fish>
                    
      </header>
    </div>
  );
}

export default App;
