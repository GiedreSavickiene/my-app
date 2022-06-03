import { useState } from 'react';
import './App.scss';
import{BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Alabama from './Components/020/Alabama';
import Racoon from './Components/020/Racoon';
import Cuckoo from './Components/020/Cuckoo';
import Dog from './Components/020/Dog';
import NotFound from './Components/020/NotFound';




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
                        {
                                 Array(1,1,1,1,1,1).map((_, i) =><Link key={i} to='/racoon'>Racoon Trash Can No: {i +1}</Link> )
                             }
                        
                        <Link to='cuckoo'>Cuckoo Nest</Link>
                        <Link to='/dog'>Dog House</Link>
                    </div>
                <div>  
                     <h2>Homes</h2>
                     <div>
                         <Routes>
                             <Route path='/' element={<Alabama/>}></Route>
                             
                             <Route path='/racoon' element={<Racoon/>}></Route>
                             <Route path='/cuckoo' element={<Cuckoo/>}></Route>
                             <Route path='/dog' element={<Dog/>}></Route>
                             <Route path='*' element={<NotFound/>}></Route>

                         </Routes>
                     </div>
                </div>
            </header>
    </div>
    
    </BrowserRouter>
  );
  
}

export default App;
