import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/iniciosesion' ? 'active' : ''}>
          <Link to="/iniciosesion">Iniciar Sesión</Link>
        </li>
        <li className={location.pathname === '/registro' ? 'active' : ''}>
          <Link to="/registro">Registro</Link>
        </li>
      </ul>
    </nav>
  );
}