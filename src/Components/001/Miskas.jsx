import rand from "../../Funkcijos/rand";

function Miskas(){
    return (

        <>
        {rand (0, 1) ? <h1>Meska</h1> : <h1>Briedis</h1> }
        </>
    );
    
}

export default Miskas;