import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NarBar.css';

const NavBar = () => {
  return (
    <header className="nav-header">
      <div className="container nav-container">
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
          <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Zara</Link>
        </h1>

        <nav className="nav-links">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/category/electronics">Electrónica</Link></li>
            <li><Link to="/category/clothing">Ropa</Link></li>
            <li><Link to="/category/books">Libros</Link></li>
            <li><Link to="/category/home">Hogar</Link></li>
            <li><Link to="/category/toys">Juguetes</Link></li>
            <li><Link to="/category/sports">Deportes</Link></li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
