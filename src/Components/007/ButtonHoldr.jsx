import {useState} from 'react'
function ButtonHolder({virvute, border}){



    


    return (
        <div className="bth" style={{borderWidth: border + "px"}}>
        <button onClick={virvute} >Change Border</button>
        </div>
    )
}

export default ButtonHolder;