import { useState } from "react";

function Car2({car,setshowCar,activeCar,setActiveCar  }){

    // const [color, setColor] = useState(false)

    const select = selelectedCar => {
        // setColor(a => !a);
        setshowCar(selelectedCar)
        setActiveCar(selelectedCar.id)
    }

    
    return(

        <div className="cars-colors" style={{backgroundColor: activeCar === car.id ? 'skyblue' : null}} onClick={() => select(car)}>
             {car.type} {car.price} EUR
        </div>

    )
}
export default Car2;