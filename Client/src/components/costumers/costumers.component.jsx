import './costumers.module.css';
import {useEffect, useState} from 'react';
import { getClientes } from '../../handlers/todosClientes';
import userStoreCostumers from '../../store/costumers';
import { useNavigate } from "react-router-dom";

function Costumers() {

  const setCostumer = userStoreCostumers((state) => state.setCostumer);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const listaClientes = await getClientes();
        setClientes(listaClientes);
        setCostumer(listaClientes);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };

    obtenerClientes();
  }, [setCostumer]);

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






{/*import { Link } from 'react-router-dom';
import './costumers.module.css';

function Costumers() {
  const usuario =  {}
  

//function Costumers(props) {
  //const { nombres, apellidos, cedula, email, direccion, celular, ciudad, codigo_postal, pais } = props.cliente;

  return (
    <div>
      <div>
        <h1>Detalle del Cliente</h1>

        <div key={usuario.cedula}></div>
      <div>
            <h4>Cedula: {usuario?.cedula}</h4>
            <h4>Nombre: {usuario?.nombre}</h4>
            <h4>Apellido: {usuario?.apellido}</h4>
            <h4>Correo: {usuario?.correo}</h4>
            <h4>Telefono: {usuario?.telefono}</h4>
            <h4>Direccion:</h4>
            <h4>Número: {usuario?.numero}</h4>
            <h4>Código Postal: {usuario?.codigo_postal}</h4>
            <h4>Ciudad: {usuario?.ciudad}</h4>
            <h4>Pais: {usuario?.pais}</h4>
          </div>
          <Link to='/home'>
          <button >Volver</button>
          </Link>

      </div>
    </div>
  );
}

export default Costumers;*/}

