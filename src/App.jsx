import { useState } from 'react';
import './App.scss';
import Te from './Components/023/Te'
import Number3 from './Components/023/Number3';



function App() {

    const [number, setNumber] = useState(1)
    const [number3, setNumber3] = useState(1)


    const plusNuber = () =>
    setNumber(n => n + 1)

  
  return (
      <Number3.Provider value={number3}>
    <div className="App">
      <header className="App-header">
        
       <h1>Context</h1>
       <Te number={number}></Te>
       
        <div className='.squer-garden'>
       <button onClick={plusNuber}>Plus Number</button>
       <button onClick={() => setNumber3(n => n + 3) }>Plus 3</button>
        </div>
       
    
      </header>
    </div>
    </Number3.Provider>
  );
}

export default App;
