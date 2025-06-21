import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';

export default function Inicio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <NavBar titulo="" />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Bienvenido</h1>
        <p>¿Qué vas a hacer?</p>
        <Link to="/iniciosesion"><button>Iniciar Sesión</button></Link>
        <br /><br />
        <Link to="/registro"><button>Registrarme</button></Link>
      </div>     
      <Footer />
    </div>
  );
}