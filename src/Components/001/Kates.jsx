import RandomColor from "../../Funkcijos/randColor";

function Kates (){

    return (
        <ul className="kates" style={{color: RandomColor()}}>
            <li>Murka</li>
            <li>Pilkis</li>
            <li>Rainis</li>
        </ul>
        
        
    );
}

export default Kates;