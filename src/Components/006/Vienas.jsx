function Vienas (props){
//Funkcija Vienas ({number})

    return (

        <div style={{color: props.color}} className={props.className}>{1 + props.number < 9  ? <h2>{1 + props.number}</h2> : null} </div> 
        // <h2> {1 + number} </h2>
    )
}

export default Vienas;