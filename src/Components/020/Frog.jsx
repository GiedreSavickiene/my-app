import {Link, Outlet} from 'react-router-dom'

function Frog(){

    return(
        <>
        <h1>Frog House</h1>
        <div className="links">
            <Link to="crimson">Crimson House</Link>
            <Link to="skyblue">SkyBlue House</Link>
        </div>
        <div className="squer-garden">
            <Outlet></Outlet>
        </div>
        </>
    )
}
export default Frog;