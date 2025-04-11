import { Link } from "react-router-dom";

const Nave:React.FC=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/PagePrin">Tienda</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nave;