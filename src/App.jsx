import { useState } from 'react';
import './App.scss';
import{BrowserRouter, Link} from 'react-router-dom'




function App() {

  return (
    <BrowserRouter>
         <div className="App">
             <header className="App-header">
        
                <div>
                     <h2>Links</h2>
                     
                </div>   
                    <div className='links'>
                        <Link to='/'>Sweet Home Alabama</Link>
                        <Link to='/racoon'>Racoon Home</Link>
                        <Link to='cuckoo'>Cuckoo Nest</Link>
                    </div>
                <div>  
                     <h2>Head</h2>
                </div>
            </header>
    </div>
    
    </BrowserRouter>
  );
  
}

export default App;
