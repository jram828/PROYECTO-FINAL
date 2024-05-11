import './crearAbogado.module.css';
import { Link } from 'react-router-dom';

function CrearAbogado() {
  return (
    <div className="contenedorcrearcliente">
        <form method="post" className="formulario">
          <h1 className="titulo">Crear cliente</h1>
          <br />
          <br />
          <div className="nombreapellido">
            <label htmlFor="nombre" className="labelcrearcliente">
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombres"
              id="name"
              className="cajascrearcliente"             
            />
            <label htmlFor="apellidos" className="labelcrearcliente">
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
            <label htmlFor="numerocedula" className="labelcrearcliente">
              Numero de cédula:
            </label>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className="cajascrearcliente"
            />
            <label htmlFor="matricula" className="labelcrearcliente">
              Matricula:
            </label>
            <input
              name="matricula"
              type="email"
            />
          </div>
          <br />
          <br />
          <label htmlFor="correo" className="labelcrearcliente">
              Email:
            </label>
            <input
              name="email"
              type="text"
              />
          <br />
          <br />
          <div className="direccioncelular">
            <label htmlFor="direccion" className="labelcrearcliente">
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              className="cajascrearcliente"
            />
            <label htmlFor="telefono" className="labelcrearcliente">
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
            <label htmlFor="ciudad" className="labelcrearcliente">
              Ciudad:
            </label>
            <input
              type="text"
              name="nombre_ciudad"
              id="city"
              className="cajascrearcliente"
            />
            <label htmlFor="contrasena" className="labelcrearcliente">
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
            <label htmlFor="pais" className="labelcrearcliente">
              Pais:
            </label>
            <input
              type="text"
              name="nombre_pais"
              id="country"
              className="cajascrearcliente"
            />
            <label htmlFor="codigopostalcontrasena" className="labelcrearcliente">
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

export default CrearAbogado