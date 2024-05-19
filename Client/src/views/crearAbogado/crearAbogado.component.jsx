
import style from './crearAbogado.module.css';
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
      password:'',
      telefono: '',
      calle: '',
      numero: '',
      codigoPostal: '',
      ciudad: '',
      pais: '',
      administrador:'',
      
    });
    console.log(userDataRegistro)
  
    const handleChangeRegistro = (e) => {
      const { name, value } = e.target;
      setUserDataRegistro(prevState => ({
        ...prevState,
        [name]: value
      }));
  };
  
  const handleChangeAdministrador = (e) => {
    if (e.target.checked) {
      setUserDataRegistro((prevState) => ({
        ...prevState,
        administrador: true,
      }));
    }
    
   
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
    <div className={style.container}>
      <form
        className={style.datos}
        method="post"
        onSubmit={submitHandlerRegistro}
      >
        {/* <div className="logo-aveza">
            <img src={logo} alt="logo-aveza" />
          </div> */}
        <h1 className={style.titulo}>Crear Abogado</h1>
        <br />
        <br />
        <div className={style.container2}>
          <label htmlFor="nombre" className={style.label}>
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombre"
            id="name"
            className={style.caja}
            value={userDataRegistro.nombre}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="apellidos" className={style.label}>
            Apellido(s):
          </label>
          <input
            type="text"
            className={style.caja}
            name="apellido"
            id="lastname"
            value={userDataRegistro.apellido}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className={style.container2}>
          <label htmlFor="numerocedula" className={style.label}>
            Numero de cédula:
          </label>
          <input
            type="number"
            className={style.caja}
            name="cedulaAbogado"
            id="cedula"
            value={userDataRegistro.cedulaAbogado}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="matricula" className={style.label}>
            Matricula:
          </label>
          <input
            type="number"
            className={style.caja}
            name="matricula"
            id="matricula"
            value={userDataRegistro.matricula}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className={style.container2}>
          <label htmlFor="correo" className={style.label}>
            Email:
          </label>
          <input
            type="email"
            name="correo"
            id="email"
            className={style.caja}
            value={userDataRegistro.correo}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="password" className={style.label}>
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            id="email"
            className={style.caja}
            value={userDataRegistro.password}
            onChange={handleChangeRegistro}
          />
          {/* </div>
          <br />
          <br />
          <div className="nombreapellidos"> */}
          <label htmlFor="telefono" className={style.label}>
            {" "}
            Teléfono:
          </label>
          <input
            type="number"
            name="telefono"
            id="telefono"
            className={style.caja}
            value={userDataRegistro.telefono}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="calle" className={style.label}>
            Calle:
          </label>
          <input
            type="text"
            name="calle"
            id="street"
            className={style.caja}
            value={userDataRegistro.calle}
            onChange={handleChangeRegistro}
          />
        </div>

        <br />
        <br />

        <div className={style.container2}>
          <label htmlFor="numero" className={style.label}>
            Numero:
          </label>
          <input
            type="text"
            className={style.caja}
            name="numero"
            id="numero"
            value={userDataRegistro.numero}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="codigopostal" className={style.label}>
            Código postal:
          </label>
          <input
            type="number"
            className={style.caja}
            name="codigoPostal"
            id="codigopostal"
            value={userDataRegistro.codigoPostal}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className={style.container2}>
          <label htmlFor="ciudad" className={style.label}>
            Ciudad:
          </label>
          <input
            type="text"
            name="ciudad"
            id="city"
            className={style.caja}
            value={userDataRegistro.ciudad}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="ciudad" className={style.label}>
            Pais:
          </label>
          <input
            type="text"
            name="pais"
            id="country"
            className={style.caja}
            value={userDataRegistro.pais}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="apellidos" className={style.label}>
            Administrador?
          </label>
          <input
            type="checkbox"
            className={style.caja}
            name="administrador"
            id="administrador"
            value={userDataRegistro.administrador}
            onChange={handleChangeAdministrador}
          />
          <br />
          <br />
        </div>

        <br />
        <div className={style.documentoagenerar}>
          <input
            className="button"
            type="submit"
            value="Guardar"
            disabled={
              !userDataRegistro.correo ||
              !userDataRegistro.cedulaAbogado ||
              !userDataRegistro.nombre ||
              !userDataRegistro.apellido
            }
          />
          <Link to="/home/lawyers">
            <button className="button">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
  };

export default CrearAbogado


{/*import './crearAbogado.css';
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
      <form
        onSubmit={submitHandlerRegistro}
        method="post"
        className="formulario"
      >
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
            onChange={handleChangeRegistro}
          />
          <label htmlFor="apellidos" className="labelcrearabogado">
            Apellido(s):
          </label>
          <input
            type="text"
            name="apellido"
            id="lastname"
            className="cajascrearabogado"
            onChange={handleChangeRegistro}
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
            name="cedulaAbogado"
            id="cedula"
            className="cajascrearabogado"
            onChange={handleChangeRegistro}
          />
          <label htmlFor="matricula" className="labelcrearabogado">
            Matricula:
          </label>
          <input
            name="matricula"
            type="text"
            onChange={handleChangeRegistro}
            className="cajascrearabogado"
          />
        </div>
        <br />
        <br />

        <div className="correo">
          <label htmlFor="correo" className="labelcrearabogado">
            Email:
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChangeRegistro}
            className="cajascrearabogado"
          />
          {/*<label htmlFor="correo" className="labelcrearabogado">
            Repetir Email:
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChangeRegistro}
            className="cajascrearabogado"
  />*/}
        {/*</div>
        <br />
        <br />

        <div className="direccioncelular">
          <label htmlFor="direccion" className="labelcrearabogado">
            Calle:
          </label>
          <input
            type="text"
            name="direccion"
            id="address"
            className="cajascrearabogado"
            onChange={handleChangeRegistro}
          />

          <label htmlFor="calle" className="labelregistrodecliente">
            Numero:
          </label>
          <input
            type="number"
            name="celular"
            id="celular"
            className="cajascrearabogado"
            onChange={handleChangeRegistro}
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
            onChange={handleChangeRegistro}
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
            onChange={handleChangeRegistro}
          />
          <label htmlFor="codigopostalcontrasena" className="labelcrearabogado">
            Codigo Postal:
          </label>
          <input
            type="text"
            name="codigo_postal"
            id="code"
            className="cajascrearabogado"
            onChange={handleChangeRegistro}
          />
          <br />
          <br />
        </div>

        <br />
        <div className="botonescrearabogado">
          <Link>
            <button type="submit" className="button">
              Crear
            </button>
          </Link>
          <Link to="/home/lawyers">
            <button className="button">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
  };

export default CrearAbogado*/}