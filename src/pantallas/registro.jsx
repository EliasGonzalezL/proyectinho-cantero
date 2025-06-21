import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import '../App.css';

export default function Registro() {
  const [datos, setDatos] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const resultado = {};

    for (let [key, value] of form.entries()) {
      if (key === 'genero') {
        resultado[key] = form.get('genero');
      } else if (key === 'suscribirse' || key === 'terminos') {
        resultado[key] = e.target[key].checked;
      } else {
        resultado[key] = value;
      }
    }
    setDatos(resultado);
    navigate("/");
  };

  const generos = ['Hombre', 'Mujer', 'Otro'];

  return (
    <>
      <NavBar titulo="" />
      <main>
        <h1>Formulario de Registro</h1> 
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Información Personal</legend>
            <Input label="Nombre:" id="nombre" required />
            <Input label="Apellido:" id="apellido" required />
            <Input label="Correo Electrónico:" id="correo" type="email" required />
            <Input label="Teléfono:" id="telefono" type="tel" required />
            <Input label="Edad:" id="edad" type="number" required />
            <RadioGroup label="Género:" name="genero" options={generos} />
            <Input label="Contraseña:" id="contrasena" type="password" required />
            <Button type="submit">Registrarse</Button>
            <Button type="reset">Borrar</Button>
          </fieldset>
          <br />
          <button type="button" onClick={() => navigate("/")}>Volver al Inicio</button>
        </form>
      </main>
      <Footer />
    </>
  );
}