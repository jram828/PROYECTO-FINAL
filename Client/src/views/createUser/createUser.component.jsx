import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './createUser.css';


function CreateUser ({crearUsuario}) {
  
    const [userDataCrear, setUserDataCrear] = useState({
      email: "",
      password: "",
      nombres: "",
      apellidos: "",
      cedula: "",
      celular: "",
      direccion: "",
      nombre_ciudad: "",
      tipo_usuario:"1"
    });
  
    const handleChangeCrear = (e) => {
      setUserDataCrear({
        ...userDataCrear,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
    };
  
    const submitHandlerCrear = (e) => {
      e.preventDefault();
      crearUsuario(userDataCrear)
    };
  
    return (

      <div className="contenedorcrearusuario">
        
        <form method="post" className="formulario" onSubmit={submitHandlerCrear}>
        <h1 className="titulo">Crear Usuario</h1>

          <br />
          <br />
          <div className="nombreapellido">
            <label for="nombre" className="labelcrearusuario">
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombres"
              id="name"
              className="cajascrearusuario"
              value={userDataCrear.nombres}
              onChange={handleChangeCrear}
            />
            <label for="apellidos" className="labelcrearusuario">
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              className="cajascrearusuario"
              value={userDataCrear.apellidos}
              onChange={handleChangeCrear}
            />
          </div>
  
          <br />
          <br />
          <div className="cedulaemail">
            <label for="numerocedula" className="labelcrearusuario">
              Numero de cédula:
            </label>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className="cajascrearusuario"
              value={userDataCrear.cedula}
              onChange={handleChangeCrear}
            />
            <label for="correo" className="labelcrearusuario">
              Email:
            </label>
            <input
              name="email"
              type="email"
              value={userDataCrear.email}
              onChange={handleChangeCrear}
              id="email"
              className="cajascrearusuario"
            />
          </div>
  
          <br />
          <br />
          <div className="direccioncelular">
            <label for="direccion" className="labelcrearusuario">
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              className="cajascrearusuario"
              value={userDataCrear.direccion}
              onChange={handleChangeCrear}
            />
            <label for="telefono" className="labelcrearusuario">
              Celular:
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              className="cajascrearusuario"
              value={userDataCrear.celular}
              onChange={handleChangeCrear}
            />
          </div>
  
          <br />
          <br />
          <div className="ciudadcontrasena">
            <label for="ciudad" className="labelcrearusuario">
              Ciudad:
            </label>
            <input
              type="text"
              name="nombre_ciudad"
              id="city"
              className="cajascrearusuario"
              value={userDataCrear.nombre_ciudad}
              onChange={handleChangeCrear}
            />
            <label for="contrasena" className="labelcrearusuario">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="cajascrearusuario"
              value={userDataCrear.password}
              onChange={handleChangeCrear}
            />
          </div>

          <br />
          <br />
          <div className="paiscontrasena">
            <label for="pais" className="labelcrearusuario">
              Pais:
            </label>
            <input
              type="text"
              name="nombre_pais"
              id="country"
              className="cajascrearusuario"
              value={userDataCrear.nombre_pais}
              onChange={handleChangeCrear}
            />
            <label for="codigopostalcontrasena" className="labelcrearusuario">
              Codigo Postal:
            </label>
            <input
              type="text"
              name="codigo_postal"
              id="code"
              className="cajascrearusuario"
              value={userDataCrear.codigo_postal}
              onChange={handleChangeCrear}
            />
            </div>
          <br />
          <br />
          <div className="botonescrearusuario">
            <input
              type="submit"
              name="guardar"
              value="Guardar"
              className="button"
              disabled={!userDataCrear.email || !userDataCrear.password}
            />
            
            <Link to ='/'><input
              type="button"
              name="Volver"
              value="volver"
              className="button"
            />
            </Link>
          </div>
          <br />
        </form>
      </div>
  )
}

export default CreateUser