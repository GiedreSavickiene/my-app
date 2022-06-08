import { useEffect, useReducer, useState } from 'react';
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

    const [textImput, setTextImput] = useState('')
    const [filterText, setFilterText] = useState(0)
    
    
    
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
    const blackNumber = () => {
        const action1 = {
            type: 'black_number',
            
        }
        dispachArray(action1)
    }
    const makeFilter = () => {
        const action1 = {
            type: 'filter_number',
            
        }
        dispachArray(action1)
    }
    const less400 = () => {
        const action1 = {
            type: 'less_number',
            
        }
        dispachArray(action1)
    }
    const showAll = () => {
        const action1 = {
            type: 'show_all',
            
        }
        dispachArray(action1)
    }
    const defaultList = () => {
        const action1 = {
            type: 'def_sort_list',
            
        }
        dispachArray(action1)
    }
    const filterImput = () => {
        const action1 = {
            type: 'imput_filter_list',
            payload: filterText
            
        }
        dispachArray(action1)
    }

    // useEffect(()=> {
    //     if(filterText == 0){
    //         return
    //     }
    //     filterImput();

    // }, [filterText])




 

    
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
                   array.map((n, i) => n.show ? <div key={i} style={{color: n.color}}>{n.number }</div> : null) 
                }
            </div>
            <button onClick={makeArray}>Make Array</button>
            <button onClick={sortArray}>Sort List</button>
            <button onClick={blackNumber}>Black Number</button>
            <button onClick={makeFilter}>Filter</button>
            <button onClick={less400}>Filter Less 400</button>
            <button onClick={showAll}>Show all</button>
            <button onClick={defaultList}>Defolt Sort</button>
            <input type="number" min='0' max='1000' step='50' value={filterText} onChange={e => setFilterText(e.target.value)}></input>
            <button onClick={filterImput}>Filter List</button>

        

            </header>
        </div>
     );
}

export default App;
