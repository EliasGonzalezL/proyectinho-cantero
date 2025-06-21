import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';

export default function InicioSesion() {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.trim() !== "") {
      navigate("/perfil", { state: { usuario } });
    } else {
      alert("Debes ingresar un usuario");
    }
  };

  return (
    <>
      <NavBar titulo="" />
      <main>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '2rem' }}>
          <label>Usuario</label><br />
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          /><br /><br />
          <button type="submit">Iniciar sesión</button><br /><br />
          <button type="button" onClick={() => navigate("/")}>Volver al Inicio</button>
        </form>
      </main>
      <Footer />
    </>
  );
}