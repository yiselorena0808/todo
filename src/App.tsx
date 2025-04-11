import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Componentes/Nav';
import './App.css';
import Carrito from './Page/Tienda/Carrito';
import DetalleProducto from './Page/Tienda/DetalleProducto';
import Home from './Page/Tienda/Home';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Producto" element={<DetalleProducto />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}

export default App;

