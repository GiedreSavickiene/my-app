
import KvadratoKvadratas from "./KvadratoKvadratas";
import Apskritimas from "./Apskritimas";

function Kvadratas(props){

    return(

        <div className="kvadratas" style={{backgroundColor: props.color1}}>
            {
                props.show === 'k' ? 
            <KvadratoKvadratas color2={props.color2}></KvadratoKvadratas>
            : <Apskritimas color2={props.color2}></Apskritimas>
            }
            </div>

    )
        
        
}

export default Kvadratas;

