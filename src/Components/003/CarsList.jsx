function CarsList(props){

    return (

        <div>cia bus sarasas

        { props.cars.map((c, i, m)=> <h3 key={i}>{c}</h3>)}

        </div>
    )


}

export default CarsList;