import { useState, useEffect } from "react";
import { Link,  } from 'react-router-dom';
import { postCaso } from "../../handlers/crearCaso";
import { getAbogados } from "../../handlers/todosAbogados";
import { getClientes } from "../../handlers/todosClientes";
import style from './crearCaso.module.css';

function CrearCaso() {
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
    } catch (error) {
      console.error("Error al crear el caso:", error.message);
      window.alert("No se pudo crear el caso");
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.titulo}>Crear caso</h1>
      <form onSubmit={submitHandlerRegistro} className={style.formulario}>
        <div className={style.inputrow}>
          
            <label className={style.label}>Tipo de caso:</label>
            <input
              className={style.input}
              name="TipoDeCasoId"
              id="TipoDeCasoId"
              value={userDataRegistro.TipoDeCasoId}
              onChange={handleChangeRegistro}
            ></input>
          
          <label className={style.label}>Fecha:</label>
          <input
            className={style.input}
            name="fecha"
            id="fecha"
            value={userDataRegistro.fecha}
            onChange={handleChangeRegistro}
          />
          
          <label className={style.label}>Fecha Final:</label>
          <input
            className={style.input}
            name="fechaFin"
            id="fechaFin"
            value={userDataRegistro.fechaFin}
            onChange={handleChangeRegistro}
          />
        </div>
        <div className={style.inputrow}>
          <label className={style.label}>Abogado:</label>
          <select
            name="cedulaAbogado"
            id="cedulaAbogado"
            className={style.select}
            onChange={(event) => handleChangeRegistro(event)}
          >
            <option value="" className={style.option}>Abogados</option>
            {abogados.map((abogado) => (
              <option key={abogado.cedulaAbogado} value={abogado.cedulaAbogado} className={style.option}>
                {abogado.nombre} {abogado.apellido} {abogado.cedulaAbogado}
              </option>
            ))}
          </select>
          <label className={style.label}>Cliente:</label>
          <select
            name="cedulaCliente"
            id="cedulaCliente"
            onChange={handleChangeRegistro}
            className={style.select}
          >
            <option value="" className={style.option}>Clientes</option>
            {clientes.map((cliente) => (
              <option key={cliente.cedulaCliente} value={cliente.cedulaCliente} className={style.option}>
                {cliente.nombre} {cliente.apellido}
              </option>
            ))}
          </select>
        </div>
        <div className={style.inputrow}>
          <label className={style.label}>Descripcion:</label>
          <textarea
            className={style.input}
            name="descripcion"
            id="descripcion"
            value={userDataRegistro.descripcion}
            onChange={handleChangeRegistro}
          ></textarea>
        </div>
        <div className="botones">
          <input type="submit" className="button" value="Guardar" />
          <Link to="/home/cases/:id">
          <button className='button'>Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CrearCaso;
