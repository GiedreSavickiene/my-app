import { useState } from 'react';
import './App.scss';
import Car1 from './Components/014/Car1';
import List2 from './Components/014/List2';
import Lists from './Components/015/Lists';



function App() {

    const cars = [
        {id: 1, type: 'MB', color: 'blue', price: 45874.01},
        {id: 4, type: 'Volvo', color: 'pink', price: 54658.00},
        {id: 17, type: 'MB', color: 'black', price: 6465.77},
        {id: 47, type: 'Opel', color: 'blue', price: 89791.77},
        {id: 10, type: 'Scania', color: 'red', price: 44624.00},
        {id: 107, type: 'BMW', color: 'red', price: 98591.00},
        {id: 44, type: 'BMW', color: 'yellow', price: 789.30},
        {id: 78, type: 'MB', color: 'blue', price: 64598.00},
        {id: 99, type: 'Tesla', color: 'gray', price: 78944.00}
    ];

    const [showCar, setshowCar] = useState(null)

    const [activeCar, setActiveCar] = useState(0)

    const [squer, setSquer] = useState([])

    const showSquer = () => {
        setSquer(s => [...s, 'skyblue', 'gray'])
    }

    


  
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>REPEAT II</h1>
       <h2>{showCar ? showCar.type : null}</h2>
       <List2 cars={cars} setshowCar={setshowCar} activeCar={activeCar} setActiveCar={setActiveCar}></List2>

        <button type='button' onClick={showSquer}>Show Squers</button>
       <div className='squer-garden'>
       {
        squer.map((s, i) => <div style={{backgroundColor: s}} className='sm-squer' key={i}></div>)
       }
      </div>

       
    
      </header>
    </div>
  );
}

export default App;
