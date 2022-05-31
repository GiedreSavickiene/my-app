import { useEffect, useState } from 'react';
import './App.scss';



function App() {

const[checkbox, setCheckbox] = useState(false)
const[checkbox1, setCheckbox1] = useState(false)

const [cat, setCat] = useState(null)
const [number, setNumber] = useState(null)

//cia darom funkcija kuri nuima checkbox varneles
const reset = () => {
  setCheckbox(false)
  setCheckbox1(false)
}

//cia reikia JSON.parsen del to, kad tas stringas kuris yra localStorage,
// vel atvirstu i masyva
useEffect(() => {
    setCat(JSON.parse( localStorage.getItem('katinukas')))
}, [])

  //cia issaugome reiksmes (katinukas - raktas, Vardu Pilkis - reiksme)
  //norint, kad masyvas graziai atsivaizduiotu, reikia naudoti JSON.stringyhy
  const addCat = () =>{
    localStorage.setItem('katinukas',JSON.stringify(['Pilkis', 'Murkis']))
    setCat( ['Pilkis', 'Murkis'])
  }

  //cia istrinam
  const removeCat = () => {
    localStorage.removeItem('katinukas');
    setCat(null)
  }

  const plusNumber = () => {
    setNumber(n =>{
      localStorage.setItem('one', n + 1);
      return n + 1
    })
  }

  //parseInt pavercia stringa i skaiciu
  useEffect(() => {
    setNumber(parseInt(localStorage.getItem('one') ?? 1))
}, [])

  const [squer, setSquer] = useState([])
  const [niceText, setNiceText] = useState('')



//idedam kvadratukus i localStorage
  const addSquer = ()=>{
    setSquer(s=>{
    localStorage.setItem('kvadratas',JSON.stringify ([...s, niceText]))
        return [...s, niceText]
        })
    }  
 
//trinam po viena kvadrata ir paliekam localStoraage atmintyje
const removeSquer = () => {
      setSquer(s=> {
        localStorage.setItem('kvadratas', JSON.stringify(s.slice(1)))
        return (s.slice(1))
      })
}
 useEffect(() => {
    setSquer(JSON.parse(localStorage.getItem('kvadratas') ?? '[]'))
}, [])


 
    
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Local Storage </h1>
       {/* masyvus mes mapinam. Jeigu yra cat ? tada map, jei ne: tada null */}
       {
         cat ? cat.map(( c, i) => <h2 key={i}>{c}</h2>) : null
       } 
       <button type='button' onClick={addCat} >Add Cat</button>
       <button type='button' onClick={removeCat} >Delete Cat</button>
       <button type='button' onClick={plusNumber}>Plus adds</button>
       <button type='button' onClick={addSquer}>Add Squere</button>
       <button type='button' onClick={removeSquer}>Remove Squere</button>
       <button type='button' onClick={reset}>Reset</button>

       {/* cia ideda teksta i kvadratuka */}
       {/* <input type='text' onChange={e => setNiceText(e.target.value)} value={niceText}></input> */}

       {/* idesim spalvas i kvadratuka */}
       <input type='color' onChange={e => setNiceText(e.target.value)} value={niceText}></input>

       {/* checkbox su kvadrateliu */}
       <input type='checkbox' onChange={() => setCheckbox(b => !b)} ></input>
       <div onClick={reset} className='squer-garden'>
       <div className='sm-squer' style={{backgroundColor: checkbox ? 'crimson' : 'black'}}></div>
       </div>

       {/* checkbox kai kvadratas virsta apskritimu */}
       <input type='checkbox' onChange={() => setCheckbox1(b => !b) } ></input>
       <div onClick={reset} className='squer-garden'>
       <div className='sm-squer' style={{borderRadius: checkbox1 ? '50%' :'' }}></div>
       </div>


       
       {/* pridedam kvadratukus. n tai kintamasis kuris prideda texta i kvadratuka */}
       <div className='squer-garden'>
       {
         squer.map((n, i) => <div className='sm-squer' key={i} style={{backgroundColor: n}}>{n}</div>)
       }
        
      </div>
      </header>
    </div>
  );
}

export default App;
