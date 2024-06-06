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
    
      <div className="space-y-6 mr-5 ml-0 w-full h-full p-6 bg-secondary rounded-lg shadow-md text-black">
        <h1 className="text-2xl font-bold text-black text-center">Crear Cita</h1>
        <form onSubmit={submitHandlerRegistro} className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center gap-2 justify-center">
            <div className="mx-4">
              <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black !w-72 relative">Titulo:
              <input
                type="text"
                name="titulo"
                id="titulo"
                value={dataRegistro.titulo}
                onChange={handleChangeRegistro}
                className="grow ml-2 text-black"
              />
              {errors.titulo && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.titulo}</p>}
              </label>
            </div>

            <div className="mx-4">
              <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black !w-72 relative">Fecha:
              <DatePicker
                selected={dataRegistro.fechaCita}
                name="fechaCita"
                id="fechaCita"
                onChange={(date) => handleChangeRegistro({ target: { name: 'fechaCita', value: date } })}
                className="grow ml-2 text-black"
                type="date"
              />
              {errors.fechaCita && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.fechaCita}</p>}
              </label>
            </div>

            <div className="mx-4">
              <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black !w-72 relative">Hora:
              <input
                type="time"
                name="horaCita"
                id="horaCita"
                value={dataRegistro.horaCita}
                onChange={handleChangeRegistro}
                className="grow ml-2 text-black"
              />
              </label>
              {errors.horaCita && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.horaCita}</p>}
            </div>

            <div className="mx-4">
              <label className="w-full">
                <select
                  name="idCaso"
                  id="idCaso"
                  onChange={handleChangeRegistro}
                  className="!w-72 h-9 p-2 border text-sm border-black rounded-md bg-secondary text-black focus:outline-none"
                >
                  <option value="" className="text-black">Seleccionar caso</option>
                  {casos.datosPagina.map(caso => (
                    <option key={caso.id} value={caso.id} className="text-black">
                      {`${caso.descripcion} - ${caso.apellidoAbogado}/${caso.apellidoCliente}`} 
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="px-4">
              <label className="">
                <textarea
                  className="textarea textarea-sm textarea-secondary !border-black !text-black text-sm h-24 !w-72"
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
            
            {/*<Link to='/home'>
              <button className="btn btn-sm w-40 border border-accent bg-white hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
                Volver
                </button>
                </Link>*/}

            <button
              type="submit"
              disabled={
                !dataRegistro.titulo ||
                !dataRegistro.fechaCita ||
                !dataRegistro.horaCita ||
                !dataRegistro.descripcion
              }
              className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white"
              value="Crear"
            >
              Crear Cita
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><path fill="white" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"></path></svg>
            </button>
          </div>
        </form>
      </div>
    
    
  );
}

export default FormCita;
