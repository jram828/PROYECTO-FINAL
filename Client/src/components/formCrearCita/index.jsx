import "./formCrearCita.css";
import { Link  } from 'react-router-dom';
import { getCasos } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { postCitaHandlers } from "../../handlers/crearCita";


function FormCita() {
  const [dataRegistro, setDataRegistro] = useState({
    titulo:"",
    descripcion:"", 
    fechaCita:"", 
    horaCita:"",
    idCaso:"",
  });


  const handleChangeRegistro = (e) => {
    setDataRegistro({
      ...dataRegistro,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

const dispatch = useDispatch();
const casos = useSelector(state => state.casos)


console.log( 'casos', casos)

useEffect(() => {
  dispatch(getCasos());
}, [dispatch]);


const submitHandlerRegistro = async (e) => {
  e.preventDefault();
  try {
    await postCitaHandlers(dataRegistro);

    window.alert("Cita creado con éxito");
  } catch (error) {
    console.error("Error al crear la cita:", error.message);
    window.alert("No se pudo crear la cita");
  }
};
 
console.log('casos2', casos)

if (!casos || !casos.datosPagina) {
  return null;
}


  return (
    <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md">
      <h1 className="tituloCita">Crear Cita</h1>
      <form onSubmit={submitHandlerRegistro} className="formularioCita">
        <div className="input-row">
          <div className="input input-bordered flex items-center gap-2">
            <label className="label">Titulo:</label>
            <input type="text"
            name="titulo"
            id="titulo"
            value={dataRegistro.titulo}
            onChange={handleChangeRegistro} />
          </div>
          <br />
          <div className="input input-bordered flex items-center gap-2">
            <label className="label">Fecha:</label>
              <input type="date"
              className="grow w-full"
              name="fechaCita"
              id="fechaCita"
              value={dataRegistro.fechaCita}
              onChange={handleChangeRegistro} />
          </div> 
          <br />
          <div className="input input-bordered flex items-center gap-2">
            <label className="label">Hora:</label>
              <input className="grow"
              type="time"
              name="horaCita"
              id="horaCita"
              value={dataRegistro.horaCita}
              onChange={handleChangeRegistro} />
          </div>
            
        <br />
        <div className="w-full px-4">
          <label className="w-full">
          <select
              name="idCaso"
              id="idCaso"
              onChange={(event) => handleChangeRegistro(event)}
              className="input input-bordered text-lg pl-2 w-full"
              >
              <option value="" className="customOption">Seleccionar caso</option>
              {casos.datosPagina.map(caso => (
                <option key={caso.id} value={caso.id} className="customOption">
                  {caso.id} 
                </option>
              ))}
          </select>
          </label>
        </div>
      
        <br></br>
        <div className="w-full px-4">
          <label className="w-full">
          <textarea className="textarea textarea-bordered h-24 w-full"
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Detalles"
          value={dataRegistro.descripcion}
          onChange={handleChangeRegistro}
          ></textarea>
          </label>
        </div>
        </div>
        <div className="flex justify-center gap-2">
          <input type="submit" className="btn btn-sm btn-accent text-white" value="Crear" />
          <Link to='/home'>
          <button className="btn btn-sm btn-accent text-white">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormCita;
