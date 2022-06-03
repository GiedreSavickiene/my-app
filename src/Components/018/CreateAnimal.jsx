import {useState} from 'react'

function CreateAnimal({setCreateAnimalData}){


    const[name, setName] = useState('')
    const[type, setType] = useState('1')
    const [hasOwner, setHasOwner] = useState(false)
    const[age, setAge] = useState('')

    const clickAdd = () => {
        setCreateAnimalData ({name, type, age, has_owner: hasOwner ? "1" : 0})
        setName('')
        setType('1')
        setHasOwner(false)
        setAge('')
    }
    

    return(
        <>
        <label>Name</label>
        <input type='text' onChange={e => setName(e.target.value)} value={name}></input>
        {/* <label>Type</label>
        <input type='text' onChange={e => setType(e.target.value)} value={type}></input> */}
        <label>Age</label>
        <input type='text' onChange={e => setAge(e.target.value)} value={age}></input>

        <label>Select type</label>
        <select onChange={e => setType(e.target.value)} value={type}>
            <option value='1'>Cat</option>
            <option value="2">Dog</option>
            <option value='3'>Rat</option>
            <option value='4'>Raccon</option>
        </select>
        <input type='checkbox' id='has-owner' checked={hasOwner} onChange={()=> setHasOwner(hasOwner => !hasOwner)}></input>
        <label>Has ownwe</label>
        <button onClick={clickAdd}>ADD</button>
        </>
    )
}

    



export default CreateAnimal;