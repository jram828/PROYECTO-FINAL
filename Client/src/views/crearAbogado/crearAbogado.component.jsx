
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
    <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-primary rounded-lg shadow-md text-white">
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

        <div className="space-y-3">
          <div className="flex justify-around">
            <div className="mx-4">
              <label htmlFor="nombre" className="input input-bordered flex items-center max-w-xs">
                Nombre(s):
              <input
                type="text"
                name="nombre"
                id="name"
                className="grow"
                value={userDataRegistro.nombre}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
            <div className="mx-4">
              <label htmlFor="apellidos" className="input input-bordered flex items-center max-w-xs">
                Apellido(s):
              <input
                type="text"
                className="grow"
                name="apellido"
                id="lastname"
                value={userDataRegistro.apellido}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
          </div>
      
          <div className="flex justify-around">
            <div className="mx-4">
              <label htmlFor="numerocedula" className="input input-bordered flex items-center max-w-xs">
              Cédula n°:
              <input
                type="number"
                className="grow"
                name="cedulaAbogado"
                id="cedula"
                value={userDataRegistro.cedulaAbogado}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
            <div className="mx-4">
              <label htmlFor="matricula" className="input input-bordered flex items-center max-w-xs">
              Matricula:
              <input
                type="number"
                className="grow"
                name="matricula"
                id="matricula"
                value={userDataRegistro.matricula}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
          </div>
          
          <div className="flex justify-around">
            <div className="mx-4">
              <label htmlFor="correo" className="input input-bordered flex items-center max-w-xs">
                Email:
              <input
                type="email"
                name="correo"
                id="email"
                className="grow"
                value={userDataRegistro.correo}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
            <div className="mx-4">
              <label htmlFor="password" className="input input-bordered flex items-center max-w-xs">
                Contraseña:
              <input
                type="password"
                name="password"
                id="email"
                className="grow"
                value={userDataRegistro.password}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="mx-4">
              <label htmlFor="telefono" className="input input-bordered flex items-center max-w-xs">
                {" "}
                Teléfono:
              <input
                type="number"
                name="telefono"
                id="telefono"
                className="grow"
                value={userDataRegistro.telefono}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>

            <div className="mx-4">
              <label htmlFor="calle" className="input input-bordered flex items-center max-w-xs">
                Calle:
              <input
                type="text"
                name="calle"
                id="street"
                className="grow"
                value={userDataRegistro.calle}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="mx-4">
              <label htmlFor="numero" className="input input-bordered flex items-center max-w-xs">
                Numero:
              <input
                type="text"
                className="grow"
                name="numero"
                id="numero"
                value={userDataRegistro.numero}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
            <div className="mx-4">
              <label htmlFor="codigopostal" className="input input-bordered flex items-center max-w-xs">
                CP:
              <input
                type="number"
                className="grow"
                name="codigoPostal"
                id="codigopostal"
                value={userDataRegistro.codigoPostal}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
          </div>
          
          <div className="flex justify-around">
            <div className="mx-4">
              <label htmlFor="ciudad" className="input input-bordered flex items-center max-w-xs">
                Ciudad:
              <input
                type="text"
                name="ciudad"
                id="city"
                className="grow"
                value={userDataRegistro.ciudad}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
            <div className="mx-4">
              <label htmlFor="ciudad" className="input input-bordered flex items-center max-w-xs">
                Pais:
              <input
                type="text"
                name="pais"
                id="country"
                className="grow"
                value={userDataRegistro.pais}
                onChange={handleChangeRegistro}
              />
              </label>
            </div>
          </div>
          <br />
          <div >
          <label htmlFor="apellidos" className="cursor-pointer label">
            Administrador?
            <br />
            <input
              type="checkbox"
              className="checkbox checkbox-accent"
              name="administrador"
              id="administrador"
              value={userDataRegistro.administrador}
              onChange={handleChangeAdministrador}
            />
            </label>
          </div>
          
        </div>
        

        <br />
        <div className="flex justify-center gap-2">
          <button
            className="btn btn-sm btn-accent text-white"
            type="submit"
            value="Guardar"
            disabled={
              !userDataRegistro.correo ||
              !userDataRegistro.cedulaAbogado ||
              !userDataRegistro.nombre ||
              !userDataRegistro.apellido
            }
          >
            Guardar
          </button>
          <Link to="/home/lawyers">
            <button className="btn btn-sm btn-accent text-white">Volver</button>
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