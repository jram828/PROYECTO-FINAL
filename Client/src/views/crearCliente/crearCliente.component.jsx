import style from './crearCliente.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
//import userStoreCostumers from '../../store/costumers';
import { useState } from 'react';
import { postCliente } from '../../handlers/createCliente';


function CrearCliente() {
  
    //const setCostumer = userStoreCostumers((state) => state.setCostumer);
  
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
        //setCostumer(datosCliente); 
  
        window.alert('Cliente creado con éxito');
      } catch (error) {
      
        console.error('Error al crear el abogado:', error.message);
        window.alert('No se pudo crear el abogado');
      }
    };
    

  return (
    <div className={style.container}>
        <form onSubmit={handleSubmit} method="post" className={style.formulario}>
          <h1 className={style.titulo}>Crear cliente</h1>
          <br />
          <br />
          <div className={style.nombreapellido}>
            <label htmlFor="nombre" className={style.labelcrearcliente}>
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombres"
              id="name"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
            <label htmlFor="apellidos" className={style.labelcrearcliente}>
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
          </div>
  
          <br />
          <br />
          <div className={style.cedulaemail}>
            <label htmlFor="numerocedula" className={style.labelcrearcliente}>
              Numero de cédula:
            </label>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
            <label htmlFor="correo" className={style.labelcrearcliente}>
              Email:
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className={style.cajascrearcliente}
            />
          </div>
  
          <br />
          <br />
          <div className={style.direccioncelular}>
            <label htmlFor="direccion" className={style.cajascrearcliente}>
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
            <label htmlFor="telefono" className={style.labelcrearcliente}>
              Celular:
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
          </div>
  
          <br />
          <br />
          <div className={style.ciudadcontrasena}>
            <label htmlFor="ciudad" className={style.labelcrearcliente}>
              Ciudad:
            </label>
            <input
              type="text"
              name="nombre_ciudad"
              id="city"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
            <label htmlFor="contrasena" className={style.labelcrearcliente}>
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
          </div>

          <br />
          <br />
          <div className={style.paiscontrasena}>
            <label htmlFor="pais" className={style.labelcrearcliente}>
              Pais:
            </label>
            <input
              type="text"
              name="nombre_pais"
              id="country"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
            <label htmlFor="codigopostalcontrasena" className={style.labelcrearcliente}>
              Codigo Postal:
            </label>
            <input
              type="text"
              name="codigo_postal"
              id="code"
              className={style.cajascrearcliente}
              onChange={handleChange}
            />
            </div>
          <br />
          <br />
          <div className={style.botonescrearcliente}>

            <Link><button type='Submit' className='button'>Crear</button></Link>
            <Link to='/home/customers'><button className='button'>Volver</button></Link>

          </div>
          <br />
        </form>
      </div>
  )
}

export default CrearCliente