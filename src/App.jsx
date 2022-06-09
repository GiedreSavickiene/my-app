import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Te from './Components/023/Te'
import Number3 from './Components/023/Number3';
import Number5 from './Components/023/Number5';



function App() {

    const [number, setNumber] = useState(1)
    const [number3, setNumber3] = useState(1)
    const [number5, setNumber5] = useState(1)
    const [number7, setNumber7] = useState(7)
    const [number9, setNumber9] = useState(9)


    const plusNuber = () =>
    setNumber(n => n + 1)

    const abc = useCallback(() => {
        console.log('ABC' + number)
    },[number])

    useEffect(() => {
        // console.log('Go')
        abc()
    }, [abc]);

  
  return (
      <Number5.Provider value={number5}>
      <Number3.Provider value={{number3, number7, setNumber9}}  >
    <div className="App">
      <header className="App-header">
        
       <h1>Context</h1>
       <Te number={number}></Te>
       
        <div className='.squer-garden'>
       <button onClick={plusNuber}>Plus Number</button>
       <button onClick={() => setNumber3(n => n + 3) }>Plus 3</button>
       <button onClick={() => setNumber5(n => n + 5) }>Plus 5</button>
       <button onClick={() => setNumber7(n => n + 7) }>Plus 7</button>
       <h2>{number9}</h2>
       {/* <button onClick={() => setNumber9(n => n + 9)} number={number9}></button> */}

        </div>
       
    
      </header>
    </div>
    </Number3.Provider>
    </Number5.Provider>
  );
}

export default App;
