import { useState } from 'react';
import Input from './components/Input';
import Select from './components/Select';
import RadioGroup from './components/RadioGroup';
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import './App.css';

function App() {
  const [datos, setDatos] = useState({});

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
  };
  const generos = ['Hombre', 'Mujer', 'Otro'];
  const cursos = ['Curso 1', 'Curso 2'];

  return (
    <>
      <h1>Inscripción</h1> 
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
          <Button type="submit">Iniciar Sesion</Button>
          <Button type="reset">Borrar Datos</Button>
        </fieldset>
        
      </form>
      
    </>
  );
}

export default App;