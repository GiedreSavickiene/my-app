import { useContext } from "react";
import Number3 from "./Number3";
import Number5 from "./Number5";

function Va({number}){

    const {number3, number7 }= useContext(Number3)
    const number5 = useContext(Number5)

    return(
        <>
        <h2>{number}</h2>
        <h2>{number3}</h2>
        <h2>{number5}</h2>
        <h2>{number7}</h2>

        </>
    )

}
export default Va;