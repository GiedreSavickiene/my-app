import { useEffect, useState } from 'react';
import './App.scss';
import Square from './Components/009/Square';
import axios from 'axios'
import User from './Components/009/User';
import User2 from './Components/009/User2';
import User3 from './Components/009/User3';

function App() {

    const [ sq, setSq] = useState([]);
    const add = () => setSq(s => [...s, 1]);

    const [users, setUsers] = useState([]);

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data);
            setUsers(res.data)
        })
    }, [])

    const [users2, setUser2] = useState([]);

    useEffect(() => {
    axios.get('https://dummyjson.com/users?limit=10')
    .then(res => {
        console.log(res.data.users);
        setUser2(res.data.users)   
     })
    }, [])

    const [users3, setUser3] = useState([]);

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res.data);
        setUser3(res.data)   
     })
    }, [])

    
    return (
        <div className="App">
            <header className="App-header">
                <h1>USE eFFeCt</h1>
            
            <button onClick={add}>add</button>
           
               
        
            <div className="squer-garden">
                {
                    sq.map((_, i) => <Square key={i} i={i}></Square>)
                }
            </div>
                {
                    users.map(u => <User key={u.id} user={u}></User> )
                }

                {
                    users2.map(u => <User2 key={u.id} users2={u}></User2>)
                }
                {
                    users3.sort((x, y) => y.title.length - x.title.length)
                    .filter(f => [7,3,10].indexOf(f.userId) !== -1)
                    .map((u, i) => <User3 wich={i} key={u.id}  users3={u}></User3>)
                }

            </header>
        </div>
    );

}

export default App;