import style from './costumers.module.css';
import React, {useEffect, useState} from 'react';

import { getClientes } from '../../handlers/todosClientes';
import { useNavigate } from "react-router-dom";
import { getClienteById } from "../../handlers/detailCliente";

function Costumers() {

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/detail/${e.target.value}`);

  };

  return (
    <select className={style.select}>
       <option value="" className={style.option}>Clientes</option>
      {clientes.map(cliente => (
        <option key={cliente.cedulaCliente} value={cliente.cedulaCliente} className={style.option}>
          {cliente.nombre} {cliente.apellido}
        </option>
      ))}
    </select>
  );
}

export default Costumers

