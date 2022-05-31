import './App.scss';
import {useState} from 'react';
import RandomColor from './Funkcijos/randColor';


function App() {
    //cia yra steitas: show yra kintamasis, setShow tai yra tai ka mes pakeisim. 
    //Klasese mes turejome setState, cia mes turime tik set ir pridedame kintamaji t.y. setShow
    //useState funkcija, kuri mums grazina array, be jos mes nepadarysik state pakeitimu
    
    const [ show, setShow] = useState(true) 
    const [show1, setShow1] = useState(true)
    const[color, setColor] = useState('blue')
    const [number, setNumber] = useState(1)
    const [squer, setSquer] = useState([]);
    
  
// cia pav kaip kopijuoti masyva ir padaryti daug kvadrateliu
    // const addSquer = () =>{
    //     setSquer(s => [...s, 1]);
        
    // }

    // tas pats uzdavinys modifikuojamaas i kvadrateliu sunumeravima
    const addSquer = () =>{
        setSquer(s => [...s, s.length +1]);

        // setSquer(s => [...s, (s[s.length - 1] ?? 0) +1]);
        
    }

    
    // const doshow = () => {
    //     setShow(s => !s);
    // }

    // const doshow1 = () =>{
    //     setShow1(s => !s)
    // }


// cia sudedme du i viena:
    const showHide = wich => {
       wich ? setShow(s => !s) : setShow1(s => !s)
        
    }

    // const doRed = () =>{
    //     setColor('red')
    // }

    // const doYellow = () =>{
    //     setColor('yellow')
    // }
    // cia sudedame dvi funkcijas i viena doRed ir doYellow
    const changeColor = color => {
        setColor(color)
    }


    // const plusNumber = () => {
    //     setNumber (s => s + 1)
    // }

    // const minusNumber = ()=> {
    //     setNumber (s => s - 1)
    // }

    const changeNumber = number => {
        setNumber (number)
    }

    // kitas varintas:
    // const changeNumber = number => {
    //     setNumber(s => s + number)
    // }

    
  return (
    <div className="App">
      <header className="App-header">
        <div className='sqr'>

        {/* cia pvz kaip padaryti daug kvadrateliu */}
        {/* {squer.map((_, i) => <div className='sq red' key={i}></div>)} */}

        {/* cia ta pati modifikuojam i sunumeruotus kvadratelius */}
        {/* {squer.map((s, i) => <div className='sq red' key={i}>{s}</div>)} */}

        {/* cia ta pati modifikuota i rand spalvs */}
        {squer.map((s, i) => <div className='sq red' key={i} style={{background: RandomColor()}}>{s}</div>)}

        </div>
        <div className='sqr'>
        {/* sitas kodas padaro kad kvadratelis su klae fish butu melynas ir paspaudus mygtuka doShow, jis
        dingtu arba pasirodytu atgal */}
        {show ? <div className='sq pink' style={{backgroundColor: color}}></div> : null}
        {show1 ? <div className='sq red'></div> : null}

        {/* sitas kodas tai variantas su klase sukurta fishred */}
        {/* {color ? <div className='fishred'></div> : <div className='fish'></div>} */}


        {/* sitas kodas padaro, kad abu kvadrateliai pavirsta geltonais */}
        {color ? <div className='fish' style={{backgroundColor: color}}></div> : null}
        {color ? <div className='fish' style={{backgroundColor: color}}></div> : null}

        </div>



       <h1>Hook {number}</h1>
       <div className='sqr'>

        {/* cia ki su dviem skirtingom funkcijom: */}
       {/* <button onClick={doShow}>Show/Hoght</button>
       <button onClick={doshow1}>Show1/Hight1</button> */}


       {/* cia kai su viena funkcija : */}
       <button onClick={() => showHide (1)}>Show/Hoght</button>
       <button onClick={() => showHide (0)}>Show1/Hight1</button>

       {/* cia kai buna skirtingos funkcijos */}
       {/* <button onClick={doRed}>Red Color</button>
       <button onClick={doYellow}>Make Yellow</button> */}

       {/* cia kai buna vienoje funkcijoje changeColor */}
       <button onClick={() => changeColor('red')}>Red Color</button>
       <button onClick={() => changeColor('yellow')}>Make Yellow</button>


      
       <button onClick={() => changeNumber (c => c +1)}>Plus Number</button>
       <button onClick={() => changeNumber (c => c - 1)}>Minus Number</button>
       {/* kits varintas (destytojo):
       <button onClick={() => changeNumber (1)}>Plus Number</button>
       <button onClick={() => changeNumber (-1)}>Minus Number</button> */}

       <button onClick={addSquer}>Add squer</button>

      </div>
                    
      </header>
    </div>
  );
}

export default App;
