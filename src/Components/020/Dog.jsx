import { Link, Outlet } from "react-router-dom";

function Dog(){

    return(
        <>
        <h1>Dog House</h1>
        <div className="links">
            <Link to="green">Green bridge</Link>
            <Link to="pink">Pink bridge</Link>
        </div>
        <div className="squer-garden">
            <Outlet></Outlet>
        </div>
        </>
    )
}
export default Dog;