import { useState, useEffect, useReducer } from 'react';
import './App.scss';
import axios from 'axios';
import User from './Components/009/User';
import booksReducer from './Reducwrs/booksReducer';


function App() {

    // const [users, setUsers] = useState([]);
    

    const [books, dispachBooks ] = useReducer(booksReducer, [])
    const [reload, setReload] = useState(false);

    useEffect (() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => {
            console.log(res.data);
            const action = {
                type: 'get_from_server',
                payload: res.data
            }
            dispachBooks(action)
        })
    }, [reload]);

    const sortBooks = () => {
        const action = {
            type: 'sort_books'
        }
        dispachBooks(action);
    }
    const defoltSort = () => {
        const action = {
            type: 'defolt_sort'
        }
        dispachBooks(action);
    }
    const moreThenSeven = () => {
        const action = {
            type: 'more_seven'
        }
        dispachBooks(action);
    }
    const showAll = () => {
        const action = {
            type: 'show_all'
        }
        dispachBooks(action);
    }
    const doReload = () => {
        const action = {
            type: 'reload'
        }
        dispachBooks(action);
        setReload(r => !r)
    }







    
  
    return (
        <div className="App">
            <header className="App-header">
        
             <h1>Books</h1>
             <div>
             {
                 books.map(u  => u.show ? <div key={u.id}> {u.title} Price: {u.price} EUR</div> : null)
             }
            </div>
            <div className='.squer-garden'>
            <button onClick={sortBooks}>Sort books</button>
            <button onClick={defoltSort}>Defolt Sort</button>
            <button onClick={moreThenSeven}>More than 13 eur</button>
            <button onClick={showAll}>Show All</button>
            <button onClick={doReload}>Reload</button>
            </div>
            </header>
        </div>
     );
}

export default App;
