import './crearCliente.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CrearCliente() {
  return (
    <div className="contenedorcrearcliente">
        <form method="post" className="formulario">
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
            />
            <label for="apellidos" className="labelcrearcliente">
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              className="cajascrearcliente"
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
            />
            <label for="correo" className="labelcrearcliente">
              Email:
            </label>
            <input
              name="email"
              type="email"
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
            />
            <label for="telefono" className="labelcrearcliente">
              Celular:
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              className="cajascrearcliente"
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
            />
            <label for="contrasena" className="labelcrearcliente">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="cajascrearcliente"
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
            />
            <label for="codigopostalcontrasena" className="labelcrearcliente">
              Codigo Postal:
            </label>
            <input
              type="text"
              name="codigo_postal"
              id="code"
              className="cajascrearcliente"
            />
            </div>
          <br />
          <br />
          <div className="botonescrearcliente">
            <Link><button>Crear</button></Link>
            <Link to='/home'><button>Volver</button></Link>
          </div>
          <br />
        </form>
      </div>
  )
}

export default CrearCliente