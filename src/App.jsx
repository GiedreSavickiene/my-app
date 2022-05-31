import { useState } from 'react';
import './App.scss';
import Create from './Components/016/Create';
import Edit from './Components/016/Edit';
import List from './Components/016/List';
import rand from './Funkcijos/rand'




function App() { 

const [name, setName] = useState('')
const [color, setColor] = useState('')

const [list, setList] = useState([])

const add = () => {
    const obj = {name, color, id:rand(10000, 99999)} // tai sutrumpintas variantask kaip{name: name, color:color} 
    setList(oldList => [...oldList, obj])
    setName('')
    setColor('')
}
//rusiuojam List by name
const sortName = () =>{
    setList(oldList => {
        return [...oldList].sort((a, b)=>{
           if(a.name > b.name) return 1;
           if(a.name < b.name) return -1;
           return 0;

        })
    })
}
//rusiuojam List by color
const sortColor = () =>{
    setList(oldList => {
        return [...oldList].sort((a, b)=>{
           if(a.color > b.color) return 1;
           if(a.color < b.color) return -1;
           return 0;

        })
    })
}

const deletList =()=>{
    setList([])
}
//trinam id is listo
const deleteItem = id =>{
    setList(oldList => oldList.filter(obj => obj.id !== id))
}



  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Repeat Part III</h1>
    <div>
       <label>Vardas</label>
       <input type='text' onChange={e => setName(e.target.value)} value={name}></input>
    </div>
    <div>
       <label>Color</label>
       <input type='text' onChange={e => setColor(e.target.value)} value={color}></input>
    </div>
    <button type='button' onClick={add}>ADD</button>
    <div> List
        <ul>
            
            {
                list.map((obj, i) => <List key={obj.id} obj={obj} i={i+1} deleteItem={deleteItem}></List> ) 
            }
            
        </ul>
    </div>
    <Edit></Edit>
    <Create></Create>

    <button onClick={sortName}>Sort By Name</button>
    <button onClick={sortColor}>Sort by Color</button>
    <button onClick={deletList}>Delete</button>

      </header>
    </div>
  );
}

export default App;
