
import { Link } from 'react-router-dom';
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

export default Costumers;

