import './crearAbogado.css';
import React from 'react';
//import { Link } from 'react-router-dom';
//import userStoreLawyers from '../../store/lawyers';
import { useState } from 'react';
import { postAbogado } from '../../handlers/crearAbogado';
import { Link } from 'react-router-dom';


function CrearAbogado() {
  
  //const addLawyer = userStoreLawyers((state) => state.addLawyer);
  
    const [userDataRegistro, setUserDataRegistro] = useState({
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
    console.log(userDataRegistro)
  
    const handleChangeRegistro = (e) => {
      const { name, value } = e.target;
      setUserDataRegistro(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    console.log(setUserDataRegistro)
  
    const submitHandlerRegistro = async (e) => {
      e.preventDefault();
      try {
        await postAbogado(userDataRegistro);
        //addLawyer(userDataRegistro); 
  
        window.alert('Abogado creado con éxito');
      } catch (error) {
      
        console.error('Error al crear el abogado:', error.message);
        window.alert('No se pudo crear el abogado');
      }
    };
   
    

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
              name="nombre"
              id="name"

              className="cajascrearabogado"
              onChange={handleChange}       
            />
            <label htmlFor="apellidos" className="labelcrearabogado">
              Apellido(s):
            </label>
            <input
              type="text"
              className="cajaregistrocliente"
              name="apellido"
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
              type="number"
              className="cajaregistrocliente"
              name="cedulaAbogado"
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
            <label htmlFor="matricula" className="labelregistrodecliente">
            Matricula:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="matricula"
            id="matricula"
            value={userDataRegistro.matricula}
            onChange={handleChangeRegistro}
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
  
            <label htmlFor="calle" className="labelregistrodecliente">
              Calle:
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
            <br />
            <br />
          </div>
  
          <br />
          <div className="botonescrearabogado">
            <Link><button type="submit" className='button'>Crear</button></Link>
            <Link to='/home'><button className='button'>Volver</button></Link>
          </div>
        </form>
      </div>
    );
  };

export default CrearAbogado