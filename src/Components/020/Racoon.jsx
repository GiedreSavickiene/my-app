import { useParams } from "react-router-dom";

function Racoon(){

    //Hukas naudojamas tam akd butu racoon numeriai

    const {id} = useParams();

    return(
        <>
        <h1>Racoon with can No  {id}</h1>
        </>
    )
}
export default Racoon;
