import { useReducer, useState } from 'react';
import './App.scss';
import colorReducer from './Reducwrs/colorReducer'
import RandomColor from './Funkcijos/randColor';
import textReducer from './Reducwrs/textReducer';
import rand from './Funkcijos/rand';
import arrayReducer from './Reducwrs/arrayReducer';




function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'brown');//yellow yra pradinis coloras
    const [colors, setColors] = useState('black')

    const [text, dispachText] = useReducer(textReducer, '000')
    const [inputText, setInputText] = useState('')

    const [array, dispachArray] = useReducer(arrayReducer, [])
    
    
    
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
    const changeText = () => {
        const action1 = {
            type: 'make_random' ,
            payload: rand(1000, 9999),
        }
        dispachText(action1)
    }

    const inputTexts = () => {
        const action1 = {
            type: 'make_text' ,
            payload: inputText,
        }
        dispachText(action1)
    }

    const makeArray = () => {
        const action1 = {
            type: 'make_array',
            
        }
        dispachArray(action1)
    }

    const sortArray = () => {
        const action1 = {
            type: 'sort_array',
            
        }
        dispachArray(action1)
    }
 

    
    return (
        <div className="App">
            <header className="App-header">
        
             <h1 style={{backgroundColor: color}}>{text}</h1>

             <button onClick={doBlack}>BLACK</button>    
             <button onClick={doBlue}>BLUE</button>   
             <button onClick={doBlueBlack}>BLACK/BLUE</button> 
             <button onClick={randomColor}>Random Color</button>
             <button onClick={randomColor2}>Random Color2</button>

             <input type='color' onChange={ e => setColors(e.target.value)} value={colors} ></input>
             <button onClick={selectColors}>Select Color</button>

             <button onClick={changeText}>Change Text</button>

             <input type='text' onChange={e => setInputText(e.target.value)} value={inputText} ></input>
             <button onClick={inputTexts}>Input Text</button>
            <div>
                {
                   array.map((n, i) => <div key={i}>{n.number}</div>) 
                }
            </div>
            <button onClick={makeArray}>Make Array</button>
            <button onClick={sortArray}>Sort List</button>
        

            </header>
        </div>
     );
}

export default App;
