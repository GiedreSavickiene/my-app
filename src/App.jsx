import { useEffect, useState } from 'react';
import './App.scss';
import Tree from './Components/018/Tree';
import axios from 'axios'
import Animal from './Components/018/Animal';
import CreateTree from './Components/018/CreateTree';
import CreateAnimal from './Components/018/CreateAnimal';
import TreeEdit from './Components/018/TreeEdit';




function App() { 

const [lastTreeUpdate, setLastTreeUpdate] = useState(Date.now())    

const [treeList, setTreeList] = useState(null);

//nuskaitymas is DB READ
useEffect (() => {
    axios.get('http://localhost:3003/trees')
    .then(res => {
        setTreeList(res.data)
    })
}, [lastTreeUpdate]);

const [animalsList, setAnimalsList] = useState(null)

useEffect(() =>{
    axios.get('http://localhost:3003/animals')
    .then(res =>{
        setAnimalsList(res.data)
    })
}, [])



//CREATE
const [createTreeData, setCreateTreeData] = useState(null)
const [createAnialData, setCreateAnimalData] = useState(null)

useEffect (() => {
    if(null === createTreeData){
        return;
    }
    axios.post('http://localhost:3003/trees', createTreeData)
    .then(res => {
       setLastTreeUpdate(Date.now())
    })
}, [createTreeData]);

useEffect (() => {
    if(null === createAnialData){
        return;
    }
    axios.post('http://localhost:3003/animals', createAnialData)
    .then(res => {
        // setTreeList(res.data)
    })
}, [createAnialData]);

//DELETE
const [deleteTreeData, setDeleteTreeData] = useState(null)

useEffect(()=> {
    if(null === deleteTreeData){
        return;
    }
    axios.delete('http://localhost:3003/trees/' + deleteTreeData.id)
    .then(res => {
        setLastTreeUpdate(Date.now());
    })
},[deleteTreeData])

//EDIT TREES

const [editTreeModalData, setEditTreeModalData] = useState(null)
const [editTreeData, setEditTreeData] = useState(null)

useEffect(() => {
            if (null === editTreeData) {
                return;
            }
            axios.put('http://localhost:3003/trees/' + editTreeData.id, editTreeData)
            .then(res => {
                setLastTreeUpdate(Date.now());
            })
        }, [editTreeData]);




  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Crud</h1>
    <div>
        <CreateTree setCreateTreeData={setCreateTreeData}></CreateTree>
        </div>
        <div>
            <CreateAnimal setCreateAnimalData={setCreateAnimalData} ></CreateAnimal>
        </div>
        
        
        <ul>Tree List
            {
                treeList ? treeList.map((t, i) => <Tree key={t.id} tree={t} index={i +1} setDeleteTreeData={setDeleteTreeData} setEditTreeModalData={setEditTreeModalData}></Tree>): null
            }
        </ul>
        <ul>Animal List
            {
                animalsList ? animalsList.map((a, i) => <Animal key={a.id} animal={a} index={i +1}></Animal>) : null
            }
        </ul>

        <TreeEdit setEditTreeData={setEditTreeData} editTreeModalData={editTreeModalData} setEditTreeModalData={setEditTreeModalData} ></TreeEdit>
    </header>
    </div>
       

  
        
    
  )
}

export default App;
