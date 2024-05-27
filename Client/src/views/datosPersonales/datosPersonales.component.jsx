import './datosPersonales.css';
import { Link } from 'react-router-dom';

function Data() {

    const datos = JSON.parse(localStorage.getItem("loggedUser"));

    const cedula = datos.cedulaAbogado ? datos.cedulaAbogado : datos.cedulaCliente

//modificar 

  return (
    <div className="detail-container">
        <div>
          <p>Datos personales:</p>
        </div>
        <div key={cedula}></div>
        <div className="detail-form">
          <div className="detail-input-group">
            <label className="detail-label">Cedula:</label>
            <input value={cedula} className="detail-input"></input>
            {datos?.matricula? (
            <label className="detail-label">Matricula:</label>
          ) : undefined }
            {datos?.matricula? (
       <input value={datos.matricula} className="detail-input"></input>
                ) : undefined }
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Nombre(s):</label>
            <input value={datos?.nombre} className="detail-input"></input>
            <label className="detail-label">Apellido(s):</label>
            <input value={datos?.apellido} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Correo:</label>
            <input value={datos?.correo} className="detail-input"></input>
            <label className="detail-label">Telefono:</label>
            <input value={datos?.telefono} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Calle:</label>
            <input value={datos?.calle} className="detail-input"></input>
            <label className="detail-label">Número:</label>
            <input value={datos?.numero} className="detail-input"></input>
            
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Código Postal:</label>
            <input value={datos?.codigoPostal} className="detail-input"></input>
            <label className="detail-label">Ciudad:</label>
            <input value={datos?.ciudad} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="last-input-group">
            <label className="detail-label">Pais:</label>
            <input value={datos?.pais} className="detail-input"></input>
          </div>
          <br />
          <br />
        </div>
 
    <button className='button'>Modificar Datos</button>
    
            <Link to="/home">
            <button className="button">Volver</button>
          </Link>
         
        
  </div>
  )
}
export default Data
