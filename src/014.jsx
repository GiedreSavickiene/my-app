import { useState } from 'react';
import './App.scss';
import Hello from './Components/014/Hello';
import Lists from './Components/014/Lists';




function App() {

  const [ate, setAte] = useState('') 
  const [red, setRed] = useState('white') 
  const [redHello, setRedHello] = useState('white')
  const [africa, setAfrica] = useState('')

  const sayLabas = () => {
      (console.log ('Labas'))
  }

  const sayAte = () =>{
      setAte('Ate')
  }
  const notAte = () => {
      setAte('');
      setRed('white')
  }
  const tugleAte = () => {
      setAte(a => a === 'Ate' ? null : 'Ate')
  }
  const makeRed = () => {
      setRed('crimson')
  }
  const makeRedHello = () => {
      setRedHello('crimson')
  }

  const helloAfrica = () => {
    setAfrica('Africa')
  }

  const resetAfrica =()=> {
    setAfrica('');
    setRedHello('white')
  }

  const ateGreen=()=> {
    setRed('green');
  }


  
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>REAPET</h1>
       <Lists></Lists>
        <h2 style={{color: red}}>{ate}</h2>
        <div className='sqc'>
       <button type='button' onClick={sayLabas}>Labas</button>
       <button type='button' onClick={sayAte}>Ate</button>
       <button type='button' onClick={notAte}>Not Ate</button>
       <button type='button' onClick={tugleAte}>Tugle Ate</button>
        </div>
        <div className='sqc'>
            <button type='button' onClick={makeRed}>Make Red</button>
        </div>
        <Hello red={redHello} africa={africa} green={ateGreen}></Hello>
        <button type='button' onClick={makeRedHello}>Hello Red</button>
        <button type='button' onClick={helloAfrica}>Africa</button>
        <button type='button' onClick={resetAfrica}>Reset Africa</button>
      </header>
    </div>
  );
}

export default App;
