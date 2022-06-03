import{useEffect, useState} from 'react'

function TreeEdit({editTreeModalData,setEditTreeModalData, setEditTreeData }){
    

    const[title, setTitle] = useState('')
    const[height, setHeight] = useState('')
    const[type, setType] = useState('1')


//Cia paspaudus Edit pasiema duomenis i lentele kuriuos norim taisyti
    useEffect (() => {
        if(null === editTreeModalData){
            return;
        }
        setTitle(editTreeModalData.title)
        setHeight(editTreeModalData.height)
        setType(editTreeModalData.type)

    },[editTreeModalData])

    const clickSave = () => {
        setEditTreeData({ title, height, type, id: editTreeModalData.id});
        setEditTreeModalData(null);
    }


    if(!editTreeModalData) {
        return null;
    }

    return(
        <>
        <label>Title</label>
        <input type='text' onChange={e => setTitle(e.target.value)} value={title}></input>
        <label>Height</label>
        <input type='text' onChange={e => setHeight(e.target.value)} value={height}></input>

        <label>Size Select</label>
        <select value={type} onChange={e => setType(e.target.value)}>
            <option value='1'>Leaf</option>
            <option value="2">Spike</option>
            <option value='3'>Palm</option>
        </select>
        <button onClick={() => setEditTreeModalData(null)}>Close</button>
        <button onClick={clickSave}>Save changes</button>
        </>
    )
}

export default TreeEdit;