import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Consultations() {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <div>
        <h2>Formulario de Consultas/Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div>
            <label>Apellidos:</label>
            <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Teléfono:</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          </div>
          <div>
            <label>Mensaje/Consulta:</label>
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows="5" required />
          </div>
          <button type="submit">Enviar Consulta</button>
        </form>
      </div>

      <Link to="/home">
          <button>Volver</button>
        </Link>

    </div>
  );
}

export default Consultations;

