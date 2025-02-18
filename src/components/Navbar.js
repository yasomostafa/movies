import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <Link to="/list">list</Link> |
            <Link to="/add">add</Link> |
            <Link to="/post">post</Link> |
            <Link to="/click">click</Link> 

        </nav>
    );
};
export default Navbar;