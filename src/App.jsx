import { useState, useEffect, useReducer } from 'react';
import './App.scss';
import axios from 'axios';
import User from './Components/009/User';
import booksReducer from './Reducwrs/booksReducer';


function App() {

    // const [users, setUsers] = useState([]);
    

    const [books, dispachBooks ] = useReducer(booksReducer, [])

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
    }, []);

    const sortBooks = () => {
        const action = {
            type: 'sort_books'
        }
        dispachBooks(action);
    }

    
  
    return (
        <div className="App">
            <header className="App-header">
        
             <h1>Books</h1>
             <div>
             {
                 books.map(u  => <div key={u.id}> {u.title}</div>)
             }
            </div>
            <button onClick={sortBooks}>Sort books</button>
            </header>
        </div>
     );
}

export default App;
