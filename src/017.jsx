import { useState } from 'react';
import './App.scss';
import Create from './Components/016/Create';
import Edit from './Components/016/Edit';
import List from './Components/016/List';
import rand from './Funkcijos/rand'




function App() { 


const [list, setList] = useState([])//listo rodymas
const [modal, setModal] = useState(null);//edito rodymas
const [name, setName] = useState('')
const [color, setColor] = useState('')
const [select, setSelect] = useState('medium')
const [red, setRed] = useState(false)
const [range, setRange] = useState('150')
const [count, setCount] = useState('')




const handleSelect = e => setSelect(e.target.value)



const add = () => {
    const obj = {name, color, id:rand(10000, 99999), select, red, range, count} // tai sutrumpintas variantask kaip{name: name, color:color} 
    setList(oldList => [...oldList, obj])
   
    
}
const edit = obj => {
        setList(oldList => oldList.map(o => o.id === obj.id ? obj : o));
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
                
                list.map((obj, i) => <List key={obj.id} obj={obj} index={i + 1} deleteItem={deleteItem} setModal={setModal}></List>)
            }
            
        </ul>
    </div>

  
        <select onChange={handleSelect} value={select}>
            <option value='small'>Small</option>
            <option value='medium' >Medium</option>
            <option value='lage'>Lage</option>
            

        </select>

        <input type='checkbox' onChange={() => setRed(r=> !r)} value={red}></input><label>Red or Not</label>
        <div>{range} m.</div>
        <input type='range'  value={range}  min='1' max='300' onChange={e=> setRange(e.target.value)}></input>
        <input type='number' value={count} onChange={e => setCount(e.target.value)}></input>    

    <button onClick={sortName}>Sort By Name</button>
    <button onClick={sortColor}>Sort by Color</button>
    <button onClick={deletList}>Delete</button>
    
    
    <Edit modal={modal} setModal={setModal} edit={edit}></Edit>
    <Create add={add}></Create>
      </header>
    </div>
  );
}

export default App;
