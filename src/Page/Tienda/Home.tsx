import { useNavigate } from 'react-router-dom';

const productos = [
  {
    id: 1,
    nombre: 'Fincas',
    precio: 150000,
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    nombre: 'Hoteles',
    precio: 200000,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    nombre: 'Playas',
    precio: 85000,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', 
  },
];

function Home() {
  const navigate = useNavigate();

  const verDetalles = (producto:any) => {
    navigate('/producto', { state: { producto } });
  };

  return (
    <div className="container">
      <h1>TechZone</h1>
      <div className="product-list">
        {productos.map((p) => (
          <div
            key={p.id}
            className="card"
          >
            <img
              src={p.img}
              alt={p.nombre}
              style={{
                width: '100%',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <h2>{p.nombre}</h2>
            <p>${p.precio.toLocaleString()}</p>
            <button onClick={() => verDetalles(p)}>Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


  