function Antras(props){
//function Antras ({number1})---kitoks perduodabas props budas

    return(

            <div style={{color: props.color1}} className={props.className}>{2 + props.number1 > 9  ? <h2>{2 + props.number1}</h2> : null} </div> 
        // <h2> {1 + number1} </h2>
    
    )
}

export default Antras;