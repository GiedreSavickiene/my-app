
import { useState } from 'react';
import './App.scss';
import Button from './Components/008/Button';
import Green from './Components/008/Green';
import SmallSquer from './Components/008/SmallSquer';

function App() {

    const [sqer, setsqer] = useState('green');
    const [number, setnumber] = useState(1);
    const [red, setRed] = useState('red');
    const [srs, setSrs] = useState([]);

    const clickAddSRS = () =>{
        setSrs(s => [...s, 1]);
    }  
    
    const clickRemdSRS = () =>{
        setSrs(s => s.slice(1));
    }    
 

    const makeNull =()=>{
        setRed(r=> r ==='red'? null : 'red')
    }

 

    const upNumber =()=>{
        setnumber(n=> n (red ? - 1 : 1));
    }

    const makePink = ()=> {
        setsqer(s => s ==='pink' ? 'green': 'pink')
    }
  
    return (
        <div className="App">
            <header className="App-header">
        
             <h1>UpLiftingas <span style={{color:sqer, backgroundColor: red, padding: '7px'}}>{number}</span></h1>
      

       

             <Button clickRemdSRS={clickRemdSRS} clickAddSRS={clickAddSRS} setsqer={makePink} upnumber={upNumber} numbBacg={makeNull}  ></Button>
                <Green sqer={sqer}></Green>
             <div className='squer-garden' >
                 {
                    srs.map((_, i) => <SmallSquer wich={i} key={i}></SmallSquer>)
                 }
             </div>
       
       

       
    
            </header>
        </div>
     );
}

export default App;
