import {useParams} from 'react-router-dom'

function Cuckoo(){
    
    const {id, color} = useParams();

    return(

        
        <>
        <h1>Cucoo</h1>
        <h1 style={{ color: '#' + color }}>Cuckoo Nest {id} </h1>
        </>
    )
}

export default Cuckoo;