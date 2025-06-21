import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/navbar';

export default function Perfil() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <NavBar titulo="Perfil (iría el logo)" />
      <main>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h1>Bienvenido, {state?.usuario || 'Invitado'}</h1>
          <p>Gracias por iniciar sesión.</p>
          <button onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      </main>
      <Footer />
    </>
  );
}