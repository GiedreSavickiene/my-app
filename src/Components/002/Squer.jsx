import rand from "../../Funkcijos/rand";
import Circle from './Circle'

function Squer(props){

    if(props.size < 100) {
        return null;
    }
    if(props.size < 200){
        return (
            <div className="tr" style={{
                height: props.size + 'px',
                width: props.size + 'px'
            }}><Circle color={props.color}></Circle></div>
        )
    }

    return (
            <div className="bl" style={{
               height: props.size + 'px',
                width: props.size + 'px' 
            }}
            ><Circle color={props.color}></Circle></div>
        )

}
export default Squer;