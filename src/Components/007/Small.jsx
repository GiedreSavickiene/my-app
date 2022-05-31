import { useState } from "react";
import randColor from '../../Funkcijos/randColor';

function Small ({side, sc, top, border }){

    
    const [color, setColor] = useState(null);

    const randoColor = () =>{
        setColor(randColor())
    }


    if(!sc){
        return null;
    }

    
    return(

        <div  className="too-small" onClick={randoColor} style={
            {
                left: side === 'left' ? '-20px' : null,
                right: side === 'right' ? '-20px' : null,
                top: top +'px',
                backgroundColor: color,
                borderWidth: border + 'px'

                
            }
        }></div>
    )
}

export default Small;