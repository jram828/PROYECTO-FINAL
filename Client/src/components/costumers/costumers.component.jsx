import './costumers.module.css';
import {useEffect, useState} from 'react';
import { getClientes } from '../../handlers/todosClientes';
//import userStoreCostumers from '../../store/costumers';
import { useNavigate } from "react-router-dom";
import { getClienteById } from '../../handlers/detailCliente';
import React from "react";

function Costumers() {

  //const setCostumer = userStoreCostumers((state) => state.setCostumer);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const listaClientes = await getClientes();
        setClientes(listaClientes);
        //setCostumer(listaClientes);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };

    obtenerClientes();
  }, []);
  const navigate = useNavigate();

  

 const handleChange = (e) => {
    console.log('mensaje cliente')
    const cliente = getClienteById(e.target.value)
    navigate(`/home/detail/${e.target.value}`);
console.log('cliente', cliente)
  };

  return (
    <select name="selectclientes" id="selectclientes" onChange={handleChange}>
      <option value="">Clientes</option>
      {clientes.map((cliente) => (
        <option key={cliente.cedulaCliente} value={cliente.cedulaCliente}>
          {cliente.nombre} {cliente.apellido} {cliente.cedulaCliente}
        </option>
      ))}
    </select>
  );
}

export default Costumers