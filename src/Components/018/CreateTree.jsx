const { useState } = require("react")

function CreateTree ({setCreateTreeData}){

    const[title, setTitle] = useState('')
    const[height, setHeight] = useState('')
    const[type, setType] = useState('1')

    const clickAdd = () => {
        setCreateTreeData ( { title, height, type})
        setTitle('')
        setHeight('')
        setType('')
    }
    

    return(
        <>
        <label>Title</label>
        <input type='text' onChange={e => setTitle(e.target.value)} value={title}></input>
        <label>Height</label>
        <input type='text' onChange={e => setHeight(e.target.value)} value={height}></input>

        <label>Size Select</label>
        <select onChange={e => setType(e.target.value)} value={type}>
            <option value='1'>Leaf</option>
            <option value="2">Spike</option>
            <option value='3'>Palm</option>
        </select>
        <button onClick={clickAdd}>ADD</button>
        </>
    )
}

export default CreateTree;