import CarPrise from "./CarPrise";
import ColorMark from "./ColorMark";

function Car(props){

    return (
        
        <h2 style={
            {
                fontSize: props.size + 'px', 
                fontFamily:props.font}
    
             }>{props.color} {props.maker} <ColorMark size={props.markSize} color={props.mark} ></ColorMark>
             <CarPrise price={props.price}></CarPrise></h2>
             )
            }

export default Car;