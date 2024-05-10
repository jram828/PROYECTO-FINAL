import './formCrearCita.css';

function FormCita ()  {

    return (
    <div>
          <h1 className="titulo">Crear Cita</h1>
        <form>
         <div>
           <div>
            <label>Tipo de cita:</label>
            <input/>
           </div>
            <label>Fecha:</label>
            <input/>
           <br/>
            <label>Hora:</label>
            <input/>
           </div>
           <div>
            <label>Personas:</label>
            <select>
              <option value="">Seleccionar...</option>
            </select>
          </div>
          <div>
             <label>Detalles:</label>
             <textarea></textarea>
          </div>
          <div className="botones">
              <input type="submit" className="botones" value="Guardar" />
          </div>
        </form>
    </div>
      );

}

export default FormCita
