
function Button({setsqer, upnumber, numbBacg,clickAddSRS,clickRemdSRS  }){

    

    return(
            <>
        
            <button onClick={setsqer} >Make Pink</button>
            <button onClick={upnumber}> Up Number</button>
            <button onClick={numbBacg}>Number color</button>
            <button onClick={clickAddSRS}>Make squer</button>
            <button onClick={clickRemdSRS}>Minus Squer</button>
        </>
        
        
    )
    
}

export default Button;