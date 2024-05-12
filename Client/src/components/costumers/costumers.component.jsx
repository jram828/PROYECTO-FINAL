import './costumers.module.css';
import {useEffect, useState} from 'react';
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

