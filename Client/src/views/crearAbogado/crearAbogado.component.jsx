import './crearAbogado.css';
import React from 'react';
import { Link } from 'react-router-dom';
import userStoreLawyers from '../../store/lawyers';
import { useState } from 'react';
import { postAbogado } from '../../handlers/crearAbogado';

function CrearAbogado() {
  
    const addLawyer = userStoreLawyers((state) => state.addLawyer);
  
    const [datosAbogado, setDatosAbogado] = useState({
      cedulaAbogado: '',
      matricula: '',
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
    console.log(datosAbogado)
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDatosAbogado(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    console.log(setDatosAbogado)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await postAbogado(datosAbogado);
        addLawyer(datosAbogado); 
  
        window.alert('Abogado creado con éxito');
      } catch (error) {
      
        console.error('Error al crear el abogado:', error.message);
        window.alert('No se pudo crear el abogado');
      }
    };
    console.log(addLawyer)
    

  return (
    <div className="contenedorcrearabogado">
        <form onSubmit={handleSubmit} method="post" className="formulario">
          <h1 className="titulo">Crear abogado</h1>
          <br />
          <br />
          <div className="nombreapellido">
            <label htmlFor="nombre" className="labelcrearabogado">
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombres"
              id="name"
              className="cajascrearabogado"
              onChange={handleChange}       
            />
            <label htmlFor="apellidos" className="labelcrearabogado">
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              className="cajascrearabogado"
              onChange={handleChange}
            />
          </div>
  
          <br />
          <br />
          <div className="cedulamatricula">
            <label htmlFor="numerocedula" className="labelcrearabogado">
              Numero de cédula:
            </label>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className="cajascrearabogado"
              onChange={handleChange}
            />
            <label htmlFor="matricula" className="labelcrearabogado">
              Matricula:
            </label>
            <input
              name="matricula"
              type="text"
              onChange={handleChange}
              className="cajascrearabogado"
            />
          </div>
          <br />
          <br />

          <div className='correo'>
            <label htmlFor="correo" className="labelcrearabogado">
                Email:
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="cajascrearabogado"
                />
              <label htmlFor="correo" className="labelcrearabogado">
                Repetir Email:
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="cajascrearabogado"
                />
          </div>
          <br />
          <br />

          <div className="direccioncelular">
            <label htmlFor="direccion" className="labelcrearabogado">
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              className="cajascrearabogado"
              onChange={handleChange}
            />
            <label htmlFor="telefono" className="labelcrearcliente">
              Celular:
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              className="cajascrearabogado"
              onChange={handleChange}
            />
          </div>
  
          <br />
          <br />
          <div className="ciudadcontrasena">
            <label htmlFor="ciudad" className="labelcrearabogado">
              Ciudad:
            </label>
            <input
              type="text"
              name="nombre_ciudad"
              id="city"
              className="cajascrearabogado"
              onChange={handleChange}
            />
            <label htmlFor="contrasena" className="labelcrearabogado">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="cajascrearabogado"
              onChange={handleChange}
            />
          </div>

          <br />
          <br />
          <div className="paiscontrasena">
            <label htmlFor="pais" className="labelcrearabogado">
              Pais:
            </label>
            <input
              type="text"
              name="nombre_pais"
              id="country"
              className="cajascrearabogado"
              onChange={handleChange}
            />
            <label htmlFor="codigopostalcontrasena" className="labelcrearabogado">
              Codigo Postal:
            </label>
            <input
              type="text"
              name="codigo_postal"
              id="code"
              className="cajascrearabogado"
              onChange={handleChange}
            />
            </div>
          <br />
          <br />
          <div className="botonescrearabogado">
            <Link><button type="submit" className='button'>Crear</button></Link>
            <Link to='/home'><button className='button'>Volver</button></Link>
          </div>
          <br />
        </form>
      </div>
  )
}

export default CrearAbogado