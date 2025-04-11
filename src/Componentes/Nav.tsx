import { Link } from 'react-router-dom';
import DetalleProducto from '../Page/Tienda/DetalleProducto';

function Nav() {
  return (
    <nav className='vertical-nav'>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/detalles">Detalles</Link>
        </li>
        <li>
        <Link to="/carrito">Carrito</Link>{}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
