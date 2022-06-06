import { useReducer } from 'react';
import './App.scss';
import colorReducer from './Reducwrs/colorReducer'



function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'brown');//yellow yra pradinis coloras
    
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
    
    return (
        <div className="App">
            <header className="App-header">
        
             <h1 style={{backgroundColor: color}}>Reducer</h1>
             <button onClick={doBlack}>BLACK</button>    
             <button onClick={doBlue}>BLUE</button>   
             <button onClick={doBlueBlack}>BLACK/BLUE</button> 
            </header>
        </div>
     );
}

export default App;
