import { useState } from 'react';
import './datosPersonales.css';
import { Link } from 'react-router-dom';
import { modificarDatos } from '../../redux/actions';
import { useDispatch } from 'react-redux';


function Data() {

    const datos = JSON.parse(localStorage.getItem("loggedUser"));
    const dispatch = useDispatch()

    const cedula = datos.cedulaAbogado ? datos.cedulaAbogado : datos.cedulaCliente
    const [userDataRegistro, setUserDataRegistro] = useState({
    cedulaCliente: datos.cedulaCliente|| datos.cedulaAbogado || '',
    nombre: datos.nombre || '',
    apellido: datos.apellido || '',
    correo: datos.correo || '',
    telefono: datos.telefono || '',
    calle: datos.calle || '',
    numero: datos.numero || '',
    codigoPostal: datos.codigoPostal || '',
    ciudad: datos.ciudad || '',
    pais: datos.pais || '',
    administrador: datos.administrador || '',
    imagen: datos.imagen || '',
      
    });
    console.log(userDataRegistro)

    const handleChangeRegistro = (e) => {
      const { name, value } = e.target;
      setUserDataRegistro(prevState => ({
        ...prevState,
        [name]: value
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modificarDatos(userDataRegistro));
    window.localStorage.setItem("loggedUser", JSON.stringify(userDataRegistro));
  };


  return (
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
  <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-secondary rounded-lg shadow-md text-black">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-black text-center">Datos Personales</h1>
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Cedula:
              <input
                name="cedulaCliente"
                value={userDataRegistro.cedulaCliente}
                className="grow ml-2 text-black"
                readOnly
              />
            </label>
          </div>
          {datos?.matricula && (
            <div className="mx-4">
              <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
                Matricula:
                <input
                  name="matricula"
                  value={userDataRegistro.matricula}
                  className="grow ml-2 text-black"
                  onChange={handleChangeRegistro}
                />
              </label>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Nombre(s):
              <input
                name="nombre"
                value={userDataRegistro.nombre}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Apellido(s):
              <input
                name="apellido"
                value={userDataRegistro.apellido}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Correo:
              <input
                name="correo"
                value={userDataRegistro.correo}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Teléfono:
              <input
                name="telefono"
                value={userDataRegistro.telefono}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Calle:
              <input
                name="calle"
                type="text"
                value={userDataRegistro.calle}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Número:
              <input
                name="numero"
                value={userDataRegistro.numero}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Código Postal:
              <input
                name="codigoPostal"
                value={userDataRegistro.codigoPostal}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
          <div className="mx-4">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
              Ciudad:
              <input
                name="ciudad"
                value={userDataRegistro.ciudad}
                className="grow ml-2 text-black"
                onChange={handleChangeRegistro}
              />
            </label>
          </div>
        </div>

        <div className="mx-4">
          <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black">
            País:
            <input
              name="pais"
              value={userDataRegistro.pais}
              className="grow ml-2 text-black"
              onChange={handleChangeRegistro}
            />
          </label>
        </div>
      </div>

      <br />
      <div className="flex justify-center gap-2">
        {/*<Link to="/home">
          <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path>
            </svg>
            Volver
          </button>
        </Link>*/}
        <button className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white" type="submit">
          Actualizar Datos
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><path fill="white" d="M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4l-3.5-4h2.32a4.44 4.44 0 0 0-4.32-3.45c-1.45 0-2.73.71-3.54 1.78L4.95 5.66a6.97 6.97 0 0 1 5.25-2.38m-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48a4.44 4.44 0 0 0 4.32 3.45c1.45 0 2.73-.71 3.54-1.78l1.71 1.95a6.95 6.95 0 0 1-5.25 2.38"></path></svg>
        </button>
      </div>
    </form>
  </div>
</div>

  )
}
export default Data

