
import './App.scss';
import{BrowserRouter, Link, Routes, Route, NavLink} from 'react-router-dom'
import Alabama from './Components/020/Alabama';
import Racoon from './Components/020/Racoon';
import Cuckoo from './Components/020/Cuckoo';
import Dog from './Components/020/Dog';
import NotFound from './Components/020/NotFound';
import rand from './Funkcijos/rand';
import RandomColor from './Funkcijos/randColor';
import Frog from './Components/020/Frog';




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
                        <h3>Racoon</h3>
                            {
                                [...Array(rand(2, 11))].map((_, i) => <NavLink style={ ({ isActive }) => ({color: isActive ? 'crimson' : ''})} key={i} to={'/racoon/' + (i + 1)}>Racoon Trash Can No: {i + 1}</NavLink> )
                             }

                        <h3>Cuckoo</h3>     
                             {
                                 [...Array(rand(3, 7))].map((_, i) => <Link key={i} to={'/cuckoo/' + (i + 1) + '/' + RandomColor(false)}>Cuckoo Nest: {i + 1}</Link>)
                             }
                        
                        <h3>Dog</h3>
                        <Link to='/dog'>Dog House</Link>
                        <Link to='/frog'>Frog House</Link>
                    </div>
                <div>  
                     
                     <div>
                         <Routes>
                             <Route path='/' element={<Alabama/>}></Route>
                             <Route path='/racoon/:id' element={<Racoon/>}></Route>
                             <Route path='/cuckoo/:id/:color' element={<Cuckoo/>}></Route>
                             <Route path='/dog' element={<Dog/>}>
                                 <Route path='green' element={<div className='sm-squer' style={{backgroundColor: 'green'}}></div>}></Route>
                                 <Route path='pink' element={<div className='sm-squer' style={{backgroundColor: 'pink'}}></div>}></Route>

                             </Route>
                             <Route path='/frog' element={<Frog/>}>
                                 <Route path='crimson' element={<div className='sm-squer' style={{backgroundColor: 'crimson', borderRadius: '50%'}}></div>}></Route>
                                 <Route path='skyblue' element={<div className='sm-squer' style={{backgroundColor: 'skyblue', borderRadius: '50%'}}></div>}></Route>

                             </Route>
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
