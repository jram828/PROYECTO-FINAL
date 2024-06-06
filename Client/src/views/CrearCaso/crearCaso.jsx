import { useState, useEffect } from "react";
import { postCaso } from "../../handlers/crearCaso";
import { getAbogados } from "../../handlers/todosAbogados";
import { getClientes } from "../../handlers/todosClientes";
import style from './crearCaso.module.css';
import { Link } from "react-router-dom";
import { getTiposCasos } from "../../handlers/todosTiposdecasos";

import { useNavigate } from "react-router-dom";

function CrearCaso() {

  const navigate = useNavigate()
  const [userDataRegistro, setUserDataRegistro] = useState({
    cedulaAbogado: "",
    cedulaCliente: "",
    fecha: "",
    fechaFin: "",
    descripcion: "",
    TipoDeCasoId: "",
  });
  console.log(userDataRegistro);

  const [abogados, setAbogados] = useState([]);

  useEffect(() => {
    const obtenerAbogados = async () => {
      try {
        const listaAbogados = await getAbogados();
        setAbogados(listaAbogados);
      } catch (error) {
        console.error("Error al obtener los abogados:", error);
      }
    };

    obtenerAbogados();
  }, []);

  console.log("abogados", abogados);

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const listaClientes = await getClientes();
        setClientes(listaClientes);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };

    obtenerClientes();
  }, []);

  const [tipos, setTipos] = useState({ allTipoDeCaso: [] });

  useEffect(() => {
    const obtenerTipos = async () => {
      try {
        const listaTipos = await getTiposCasos();
        if (listaTipos && Array.isArray(listaTipos.allTipoDeCaso)) {
          setTipos(listaTipos);
        } else {
          console.error("Error: La respuesta no es un objeto esperado", listaTipos);
        }
      } catch (error) {
        console.error("Error al obtener los tipos de casos:", error);
      }
    };

    obtenerTipos();
  }, []);

  

  const handleChangeRegistro = (e) => {
    const { name, value } = e.target;
    setUserDataRegistro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(setUserDataRegistro);

  const submitHandlerRegistro = async (e) => {
    e.preventDefault();
    try {
      await postCaso(userDataRegistro);

      window.alert("Caso creado con éxito");
      navigate('/home/cases')
    } catch (error) {
      console.error("Error al crear el caso:", error.message);
      window.alert("No se pudo crear el caso");
    }
  };

  
  return (
  
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
    <div className="space-y-6 w-1/3 h-full p-6 bg-secondary rounded-lg shadow-md text-black">
    <h1 className="text-2xl font-bold text-black text-center">Crear caso</h1>
    <form onSubmit={submitHandlerRegistro}>
      
      <div className="space-y-3">
      <div className="flex flex-col items-center space-y-3">
        {/* <div className="w-52 items-center px-2"> */}
          <label className="">
            <select
              name="TipoDeCasoId"
              id="TipoDeCasoId"
              className="!w-52 h-8 p-2 border text-xs border-black rounded-lg bg-secondary text-black focus:outline-none"
              onChange={(event) => handleChangeRegistro(event)}
            >
              <option value="" disabled selected className="text-black">Tipo de caso</option>
              {tipos.allTipoDeCaso.map((tipo) => (
                <option key={tipo.TipoDeCasoId} value={tipo.TipoDeCasoId} className="text-black">
                  {tipo.descripcion}
                </option>
              ))}
            </select>
          </label>
        {/* </div> */}

        <div className="mx-4 items-center">
          <label className="input input-sm text-xs !border-black !rounded-lg input-secondary flex items-center !w-52 !text-black">
            Fecha:
            <input
              className="grow ml-2 text-black"
              name="fecha"
              id="fecha"
              type="date"
              value={userDataRegistro.fecha}
              onChange={handleChangeRegistro}
            />
          </label>
        </div>

        <div className="mx-4">
          <label className="input input-sm text-xs !border-black !rounded-lg input-secondary flex items-center !w-52 !text-black">
            Final:
            <input
              className="grow ml-2 text-black"
              name="fechaFin"
              id="fechaFin"
              type="date"
              value={userDataRegistro.fechaFin}
              onChange={handleChangeRegistro}
            />
          </label>
        </div>

        
          <label className="">
            <select
              name="cedulaAbogado"
              id="cedulaAbogado"
              className="!w-52 h-8 p-2 border text-xs border-black rounded-lg bg-secondary text-black focus:outline-none"
              onChange={(event) => handleChangeRegistro(event)}
              value={userDataRegistro.cedulaAbogado}
            >
              <option value="" className="text-black">Abogados</option>
              {abogados.map((abogado) => (
                <option key={abogado.cedulaAbogado} value={abogado.cedulaAbogado} className="text-black">
                  {abogado.nombre} {abogado.apellido}
                </option>
              ))}
            </select>
          </label>

          <label className="">
            <select
              name="cedulaCliente"
              id="cedulaCliente"
              onChange={handleChangeRegistro}
              className="!w-52 h-8 p-2 border text-xs border-black rounded-lg bg-secondary text-black focus:outline-none"
              value={userDataRegistro.cedulaCliente}
            >
              <option value="" className="!text-black">Clientes</option>
              {clientes.map((cliente) => (
                <option key={cliente.cedulaCliente} value={cliente.cedulaCliente} className="!text-black">
                  {cliente.nombre} {cliente.apellido}
                </option>
              ))}
            </select>
          </label>
        


        <div className="">
          <label className="">
            <textarea
              className="textarea textarea-sm textarea-secondary !border-black !text-black text-xs h-24 !w-52"
              name="descripcion"
              id="descripcion"
              value={userDataRegistro.descripcion}
              onChange={handleChangeRegistro}
              placeholder="Descripción"
            ></textarea>
          </label>
        </div>
        </div>
        </div>

      <div className="flex justify-center gap-2 mt-4">
        <Link to="/home/cases">
            <button className="btn btn-xs border border-accent bg-white hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
            Volver
            </button>
        </Link>
        <button
          type="submit"
          className="btn btn-xs  bg-accent text-white hover:bg-primary hover:text-white"
        >
          Crear Caso
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
        </button>
        
      </div>
    </form>
  </div>
    </div>

 
  );
}

export default CrearCaso;
