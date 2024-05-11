import "./formCrearCita.css";

function FormCita() {
  return (
    <div className="container">
      <h1 className="titulo">Crear Cita</h1>
      <form className="formulario">
        <div className="input-row">
          <div>
            <label className="label">Tipo de cita:</label>
            <input className="input" />
          </div>
          <label className="label">Fecha:</label>
          <input className="input" />
          <br />
          <label className="label">Hora:</label>
          <input className="input" />
        </div>
        <div className="input-row">
          <label className="label">Personas:</label>
          <select className="select">
            <option value="">Seleccionar...</option>
          </select>
        </div>
        <div className="input-row">
          <label className="label">Detalles:</label>
          <textarea className="input"></textarea>
        </div>
        <div className="botones">
          <input type="submit" className="button" value="Guardar" />
        </div>
      </form>
    </div>
  );
}

export default FormCita;
