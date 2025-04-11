import { useLocation, useNavigate } from 'react-router-dom';

function DetalleProducto() {
  const location = useLocation();
  const navigate = useNavigate();
  const { producto } = location.state || {};
  return (
    <div>
      <h1>{producto.nombre}</h1>
      <img src={producto.img} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => navigate('/carrito')}>Ir al Carrito</button>
    </div>
  );
}

export default DetalleProducto;

