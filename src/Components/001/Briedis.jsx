import rand from "../../Funkcijos/rand";

function Briedis (){

    return <h2 style={
        {
            fontSize: rand(10, 50)  + 'px'
        }
    }>As briedis, o kas tu?</h2>
}

export default Briedis;