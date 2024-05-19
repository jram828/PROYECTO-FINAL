import "./formCrearCita.css";
import { Link  } from 'react-router-dom';

function FormCita() {
  return (
    <div className="containerCita">
      <h1 className="tituloCita">Crear Cita</h1>
      <form className="formularioCita">
        <div className="input-row">
          <div>
            <label className="label">Titulo:</label>
            <input className="input" />
          </div>
            <label className="label">Fecha:</label>
            <input className="input" />
          <br />
            <label className="label">Hora:</label>
            <input className="input" />
        </div>
        <div className="input-row">
          <label className="label">Detalles:</label>
          <textarea className="input"></textarea>
        </div>
        <div className="botones">
          <input type="submit" className="button" value="Crear" />
          <Link to='/home'>
          <button className="button">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormCita;
