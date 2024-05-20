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
      <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md">
        <h1>Formulario de Contacto</h1>
        <form onSubmit={handleSubmit} className="detail-form">
          <div className="input input-bordered flex items-center gap-2">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="grow" required />
          </div>
          <br />
          <div className="input input-bordered flex items-center gap-2">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="grow" required />
          </div>
          <br />
          <div className="input input-bordered flex items-center gap-2">
            <label htmlFor="email" >Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="grow" required />
          </div>
          <br />
          <div className="input input-bordered flex items-center gap-2">
            <label htmlFor="telefono" className="">Teléfono:</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="grow" required />
          </div>
          <br />
          <div className="form-control">
            <label htmlFor="mensaje" className={`label-text absolute left-3 top-3 text-left pointer-events-none transition-all transform origin-top-left duration-200 ease-in-out ${
            mensaje ? 'translate-y-[-1.5rem] scale-75' : ''
          }`}>
              <span className="label-text">Mensaje/Consulta:</span>
            </label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="textarea textarea-bordered h-24"
              placeholder="Escriba su consulta aquí"
              rows="5"
              required
            />
        </div>
          <div className="detail-buttons">
            <button type="submit" className='btn btn-accent btn-sm'>Enviar Consulta</button>
            <Link to="/home">
            <button className='btn btn-accent btn-sm'>Volver</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consultations;

