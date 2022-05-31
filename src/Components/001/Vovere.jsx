import rand from "../../Funkcijos/rand";


function Vovere(){

    return (
        <>
    <div>
        <div className="vovere">Vovere Nr.: { 4 * 8 }</div>
        <b>Stora Vovere</b>
    </div>
    <h3>Voveriu medis Nr.: {rand(100,999)}</h3>
    </>
    );

}

export default Vovere;