import { useReducer, useState } from 'react';
import './App.scss';
import colorReducer from './Reducwrs/colorReducer'
import RandomColor from './Funkcijos/randColor';



function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'brown');//yellow yra pradinis coloras
    const [colors, setColors] = useState('black')
    
    const doBlack = () => {
        const action = {
            type: 'make_black'
        }
        dispachColor(action);
    }

    const doBlue = () => {
        const action1 = {
            type: 'make_blue' 
        }
        dispachColor(action1)
    }
    const doBlueBlack = () => {
        const action1 = {
            type: 'make_blue_black' 
        }
        dispachColor(action1)
    }
    const randomColor = () => {
        const action1 = {
            type: 'make_random' 
        }
        dispachColor(action1)
    }
    const randomColor2 = () => {
        const action1 = {
            type: 'make_random2' ,
            payload: randomColor()
        }
        dispachColor(action1)
    }
    const selectColors = () => {
        const action1 = {
            type: 'make_color' ,
            payload: colors,
        }
        dispachColor(action1)
    }


    
    return (
        <div className="App">
            <header className="App-header">
        
             <h1 style={{backgroundColor: color}}>Reducer</h1>
             <button onClick={doBlack}>BLACK</button>    
             <button onClick={doBlue}>BLUE</button>   
             <button onClick={doBlueBlack}>BLACK/BLUE</button> 
             <button onClick={randomColor}>Random Color</button>
             <button onClick={randomColor2}>Random Color2</button>

             <input type='color' onChange={ e => setColors(e.target.value)} value={colors} ></input>
             <button onClick={selectColors}>Select Color</button>

            </header>
        </div>
     );
}

export default App;
