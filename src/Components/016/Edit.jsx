import{useState} from 'react'
function Edit(){
    

    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    return(

        <div>
            <div></div>
            <div>
       <label>Vardas</label>
       <input type='text' onChange={e => setName(e.target.value)} value={name}></input>
    </div>
    <div>
       <label>Color</label>
       <input type='text' onChange={e => setColor(e.target.value)} value={color}></input>
    </div>
    
        </div>
    )
}

export default Edit;