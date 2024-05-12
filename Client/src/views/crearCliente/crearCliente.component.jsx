import './crearCliente.css';
import React from 'react';
import { Link } from 'react-router-dom';
import userStoreCostumers from '../../store/costumers';
import { useState } from 'react';
import { postCliente } from '../../handlers/createCliente';


function CrearCliente() {
  
    const addCostumer = userStoreCostumers((state) => state.addCostumer);
  
    const [datosCliente, setDatosCliente] = useState({
      cedulaCliente: '',
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      calle: '',
      numero: '',
      codigoPostal: '',
      ciudad: '',
      pais: ''
    });
    console.log(datosCliente)
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDatosCliente(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    console.log(setDatosCliente)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await postCliente(datosCliente);
        addCostumer(datosCliente); 
  
        window.alert('Cliente creado con éxito');
      } catch (error) {
      
        console.error('Error al crear el abogado:', error.message);
        window.alert('No se pudo crear el abogado');
      }
    };
    console.log(addCostumer)

  return (
    <div className="contenedorcrearcliente">
        <form onSubmit={handleSubmit} method="post" className="formulario">
          <h1 className="titulo">Crear cliente</h1>
          <br />
          <br />
          <div className="nombreapellido">
            <label for="nombre" className="labelcrearcliente">
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombres"
              id="name"
              className="cajascrearcliente"
              onChange={handleChange}
            />
            <label for="apellidos" className="labelcrearcliente">
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              className="cajascrearcliente"
              onChange={handleChange}
            />
          </div>
  
          <br />
          <br />
          <div className="cedulaemail">
            <label for="numerocedula" className="labelcrearcliente">
              Numero de cédula:
            </label>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className="cajascrearcliente"
              onChange={handleChange}
            />
            <label for="correo" className="labelcrearcliente">
              Email:
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="cajascrearcliente"
            />
          </div>
  
          <br />
          <br />
          <div className="direccioncelular">
            <label for="direccion" className="labelcrearcliente">
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              className="cajascrearcliente"
              onChange={handleChange}
            />
            <label for="telefono" className="labelcrearcliente">
              Celular:
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              className="cajascrearcliente"
              onChange={handleChange}
            />
          </div>
  
          <br />
          <br />
          <div className="ciudadcontrasena">
            <label for="ciudad" className="labelcrearcliente">
              Ciudad:
            </label>
            <input
              type="text"
              name="nombre_ciudad"
              id="city"
              className="cajascrearcliente"
              onChange={handleChange}
            />
            <label for="contrasena" className="labelcrearcliente">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="cajascrearcliente"
              onChange={handleChange}
            />
          </div>

          <br />
          <br />
          <div className="paiscontrasena">
            <label for="pais" className="labelcrearcliente">
              Pais:
            </label>
            <input
              type="text"
              name="nombre_pais"
              id="country"
              className="cajascrearcliente"
              onChange={handleChange}
            />
            <label for="codigopostalcontrasena" className="labelcrearcliente">
              Codigo Postal:
            </label>
            <input
              type="text"
              name="codigo_postal"
              id="code"
              className="cajascrearcliente"
              onChange={handleChange}
            />
            </div>
          <br />
          <br />
          <div className="botonescrearcliente">
            <Link><button type='Submit' className='button'>Crear</button></Link>
            <Link to='/home'><button className='button'>Volver</button></Link>
          </div>
          <br />
        </form>
      </div>
  )
}

export default CrearCliente