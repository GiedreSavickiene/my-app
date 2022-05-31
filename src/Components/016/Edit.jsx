import{useEffect, useState} from 'react'

function Edit({modal, setModal, edit,  red}){
    

    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [select, setSelect] = useState('medium')
    const [range, setRange] = useState('150')
    const [count, setCount] = useState('')


    const handleSelect = e => setSelect(e.target.value)


    const clickEdit = () => {
        const obj = {name, color, id: modal.id, select, red, range, count: parseInt(count) + parseInt(modal.count)}
        edit(obj);
        setModal(null)
        
        
        
    }

    useEffect(() => {
        if (null === modal) {
            return;
        }
        setName(modal.name);
        setColor(modal.color);
    }, [modal]);

    if(!modal) {
        return null;
    }


    return(

        <div>
            <div>Edit List</div>
            <div>
       <label>Vardas</label>
       <input type='text' onChange={e => setName(e.target.value)} value={name}></input>
    </div>
    <div>
       <label>Color</label>
       <input type='text' onChange={e => setColor(e.target.value)} value={color}></input>
    </div>
    <button type="button" onClick={() => setModal(null)}>Close</button>
    <button onClick={clickEdit}>Save Changes</button>

    <select onChange={handleSelect} value={select}>
            <option value='small'>Small</option>
            <option value='medium' >Medium</option>
            <option value='lage'>Lage</option>
            

        </select>

        <div>{range} m.</div>
        <input type='range'  value={range}  min='1' max='300' onChange={e=> setRange(e.target.value)}></input>
        <input type='number' value={count} onChange={e => setCount(e.target.value) }></input> <div>{modal.count}</div>   
        </div>
    )
}

export default Edit;