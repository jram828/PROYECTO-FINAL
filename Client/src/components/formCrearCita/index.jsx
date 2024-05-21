import "./formCrearCita.css";
import { Link  } from 'react-router-dom';
import { getCasos } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


function FormCita() {
const dispatch = useDispatch();
const casos = useSelector(state => state.casos)


console.log( 'casos', casos)

useEffect(() => {
  dispatch(getCasos());
}, [dispatch]);


 
console.log('casos2', casos)

if (!casos || !casos.datosPagina) {
  return null;
}


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
        <label className="label">Caso:</label>
        <select
            name="idcaso"
            id="idcaso"
            >
            <option value="" >Seleccionar...</option>
            {casos.datosPagina.map(caso => (
              <option key={caso.id} value={caso.id} >
                {caso.id} 
              </option>
             ))}
          </select>
            
        <br></br>
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
