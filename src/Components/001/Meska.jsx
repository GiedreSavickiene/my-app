import rand from "../../Funkcijos/rand";

function Meska(){
    return <h1 style={
        
    {
            
        color: rand(0 ,1) ? 'red' : 'blue'     
    }
    }>As meska</h1>
    

}

export default Meska;