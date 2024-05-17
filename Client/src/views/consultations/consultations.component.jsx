import { useState } from 'react';
import { Link } from 'react-router-dom';
import './consultations.css'

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
      <div className="detail-container">
        <h2>Formulario de Consultas/Contacto</h2>
        <form onSubmit={handleSubmit} className="detail-form">
          <div className="detail-input-group">
            <label htmlFor="nombre" className="detail-label">Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="detail-input" required />
          </div>
          <div className="detail-input-group">
            <label htmlFor="apellidos" className="detail-label">Apellidos:</label>
            <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="detail-input" required />
          </div>
          <div className="detail-input-group">
            <label htmlFor="email" className="detail-label">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="detail-input" required />
          </div>
          <div className="detail-input-group">
            <label htmlFor="telefono" className="detail-label">Teléfono:</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="detail-input" required />
          </div>
          <div className="detail-input-group">
            <label htmlFor="mensaje" className="detail-label">Mensaje/Consulta:</label>
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="detail-input" rows="5" required />
          </div>
          <div className="detail-buttons">
            <button type="submit" className="button">Enviar Consulta</button>
            <Link to="/home">
            <button className='button'>Volver</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consultations;

