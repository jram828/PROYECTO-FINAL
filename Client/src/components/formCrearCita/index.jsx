import "./formCrearCita.css";
import { Link, useNavigate  } from 'react-router-dom';
import { getCasos } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { postCitaHandlers } from "../../handlers/crearCita";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



function FormCita() {

  const [dataRegistro, setDataRegistro] = useState({
    titulo:"",
    descripcion:"", 
    fechaCita:"", 
    horaCita:"",
    idCaso:"",
  });


  const handleChangeRegistro = (e) => {
    const { name, value } = e.target ? e.target : { name: 'fechaCita', value: e };
    setDataRegistro(prevData => ({
      ...prevData,
      [name]: value,
    }));
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
    window.location.reload();
    

  } catch (error) {
    console.error("Error al crear la cita:", error.message);
    window.alert("No se pudo crear la cita");
  }
};
 
console.log('casos2', casos)

if (!casos || !casos.datosPagina) {
  return null;
}

console.log('registro', dataRegistro)

  return (
    <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md mx-auto">
      <h1 className="tituloCita text-center">Crear Cita</h1>
      <form onSubmit={submitHandlerRegistro} className="formularioCita flex flex-col items-center">
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
            <DatePicker
            selected={dataRegistro.fechaCita}
            name="fechaCita"
            id="fechaCita"
            onChange={(date) => handleChangeRegistro({ target: { name: 'fechaCita', value: date } })}
            />
            {/*<input type="text"
            name="fechaCita"
            id="fechaCita"
            value={dataRegistro.fechaCita}
            onChange={handleChangeRegistro} />*/}
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
          <div className="flex items-center gap-2">
            <label className="">
            <select
                name="idCaso"
                id="idCaso"
                onChange={(event) => handleChangeRegistro(event)}
                className="input input-bordered text-lg pl-2"
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
          <div className="flex items-center gap-2">
            <label className="">
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
