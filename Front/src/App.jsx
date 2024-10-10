import axios from 'axios';
import react, { useState, useEffect } from 'react';
import Formulario from './assets/components/Formulario.jsx';
import ListaEstudiante from './assets/components/ListaEstudiante.jsx';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/estudiantes')
      .then(response => setEstudiantes(response.data))
      .catch(error => console.error('Error al cargar estudiantes', error));
  }, []);

  const agregarEstudiante = (nuevoEstudiante) => {
    axios.post('http://localhost:5000/estudiantes', nuevoEstudiante)
      .then(response => setEstudiantes([...estudiantes, response.data]))
      .catch(error => console.error('Error al agregar estudiante', error));
  };

  const eliminarEstudiante = (documento) => {
    axios.delete(`http://localhost:5000/estudiantes/${documento}`)
      .then(() => setEstudiantes(estudiantes.filter(est => est.documento !== documento)))
      .catch(error => console.error('Error al eliminar estudiante', error));
  };

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario agregarEstudiante={agregarEstudiante} />
        <ListaEstudiante estudiantes={estudiantes} eliminarEstudiante={eliminarEstudiante} />
      </div>
    </div>
  );
}

export default App;