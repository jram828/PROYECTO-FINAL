import "./formCrearCita.css";
import { Link } from 'react-router-dom';
import { getCasos } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { postCitaHandlers } from "../../handlers/crearCita";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import loading from "../../assets/loading.gif";
import validation from "../validation/validation";

function FormCita() {
  const [dataRegistro, setDataRegistro] = useState({
    titulo: "",
    descripcion: "",
    fechaCita: "",
    horaCita: "",
    idCaso: "",
  });

  const [errors, setErrors]= useState({});

  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la visualización del loading

  const handleChangeRegistro = (e) => {
    const { name, value } = e.target ? e.target : { name: 'fechaCita', value: e };
    setDataRegistro(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(validation({
      ...dataRegistro,
      [name]: value,
    }))
  };

  const dispatch = useDispatch();
  const casos = useSelector(state => state.casos)

  useEffect(() => {
    dispatch(getCasos()).then(() => setIsLoading(false)); // Desactivar el loading después de cargar los casos
  }, [dispatch]);

  const submitHandlerRegistro = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Activar el loading antes de enviar la solicitud
      await postCitaHandlers(dataRegistro);
      window.alert("Cita creado con éxito");
      window.location.reload();
    } catch (error) {
      console.error("Error al crear la cita:", error.message);
      window.alert("No se pudo crear la cita");
    } finally {
      setIsLoading(false); // Desactivar el loading después de la solicitud
    }
  };

  if (isLoading || !casos || !casos.datosPagina) {
    return (
      <div className="loading-container">
        <h2 className="loading">Cargando...</h2>
        <img className="loading-image" src={loading} alt="loading" />
      </div>
    );
  }

  /*useEffect(() => {
    if( dataRegistro.titulo !== '' || dataRegistro.fechaCita !== '' || dataRegistro.horaCita !== '' || dataRegistro.descripcion !== ''  ) {
        const dataValidated = validation(dataRegistro);
        setErrors(dataValidated);
    }
 }, [dataRegistro])*/

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
            {errors.titulo && 
            <p className="error_form">
            {errors.titulo}
            </p>}
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
            {errors.fechaCita && 
            <p className="error_form">
            {errors.fechaCita}
            </p>}
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
              {errors.horaCita && 
            <p className="error_form">
            {errors.horaCita}
            </p>}
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
                  {`${caso.descripcion} - ${caso.apellidoAbogado}/${caso.apellidoCliente}`} 
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
          <input type="submit" 
          disabled={
            !dataRegistro.titulo ||
            !dataRegistro.fechaCita ||
            !dataRegistro.horaCita||
            !dataRegistro.descripcion
          }
          className="btn btn-sm btn-accent text-white" value="Crear" />
          <Link to='/home'>
          <button className="btn btn-sm btn-accent text-white">Volver</button>
          </Link>
        </div>
      </form>
    </div>
   
    
  );
}

export default FormCita;
