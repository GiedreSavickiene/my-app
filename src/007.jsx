import { useState } from 'react';
import './App.scss';
import Bluesquere from './Components/007/Bluesquere';



function App() {

  const[sc, setSc] = useState(false);

  const clickLabas = () => {
    setSc(c => c === true ? false : true)
    // setSc(c => !c) kitas variantas

  }

  
  return (
    <div className="App">
      <header className="App-header">
        
       <h1 className='clickable' onClick={clickLabas} style={{letterSpacing: sc ? '2px' : '20px'}}>Labas</h1>

       <Bluesquere sc={sc}></Bluesquere>
    
      </header>
    </div>
  );
}

export default App;
