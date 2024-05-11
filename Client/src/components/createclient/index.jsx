import { useState } from "react";
import "./createClient.css";
import { createClient } from "../../handlers/createClient";

const CreateClient = () => {
    const [userDataRegistro, setUserDataRegistro] = useState({
      cedulaCliente: "",
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      calle: "",
      numero: "",
      codigoPostal: "",
      ciudad: "",
      pais: "",
    });

    const handleChangeRegistro = (e) => {
      setUserDataRegistro({
        ...userDataRegistro,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
    };

    const submitHandlerRegistro = (e) => {
      e.preventDefault();
      createClient(userDataRegistro);
    };
  return (
    <div className="contenedorregistro">
      <form className="datos" method="post" onSubmit={submitHandlerRegistro}>
        {/* <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" />
        </div> */}
        <h1 className="titulo">Crear Cliente</h1>
        <br />
        <br />
        <div className="nombreapellidos">
          <label htmlFor="nombre" className="labelregistrodecliente">
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombres"
            id="name"
            className="cajaregistrocliente"
            value={userDataRegistro.nombre}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="apellidos" className="labelregistrodecliente">
            Apellido(s):
          </label>
          <input
            type="text"
            className="cajaregistrocliente"
            name="apellidos"
            id="lastname"
            value={userDataRegistro.apellido}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="numerocedula" className="labelregistrodecliente">
            Numero de cédula:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="cedula"
            id="cedula"
            value={userDataRegistro.cedula}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className="numerocedula">
          <label htmlFor="correo" className="labelregistrodecliente">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="cajaregistrocliente"
            value={userDataRegistro.email}
            onChange={handleChangeRegistro}
          />
          {/* </div>
        <br />
        <br />
        <div className="nombreapellidos"> */}
          <label htmlFor="telefono" className="labelregistrodecliente">
            {" "}
            Teléfono:
          </label>
          <input
            type="number"
            name="telefono"
            id="telefono"
            className="cajaregistrocliente"
            value={userDataRegistro.telefono}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="calle" className="labelregistrodecliente">
            Calle:
          </label>
          <input
            type="text"
            name="calle"
            id="street"
            className="cajaregistrocliente"
            value={userDataRegistro.calle}
            onChange={handleChangeRegistro}
          />
        </div>

        <br />
        <br />

        <div className="nombreapellidos">
          <label htmlFor="numero" className="labelregistrodecliente">
            Numero:
          </label>
          <input
            type="text"
            className="cajaregistrocliente"
            name="numero"
            id="numero"
            value={userDataRegistro.numero}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="codigopostal" className="labelregistrodecliente">
            Código postal:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="codigopostal"
            id="codigopostal"
            value={userDataRegistro.codigoPostal}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className="honorarios">
          <label htmlFor="ciudad" className="labelregistrodecliente">
            Ciudad:
          </label>
          <input
            type="text"
            name="nombre_ciudad"
            id="city"
            className="cajaregistrocliente"
            value={userDataRegistro.ciudad}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="ciudad" className="labelregistrodecliente">
            Pais:
          </label>
          <input
            type="text"
            name="pais"
            id="country"
            className="cajaregistrocliente"
            value={userDataRegistro.pais}
            onChange={handleChangeRegistro}
          />
          <br />
          <br />
        </div>

        <br />
        <div className="documentoagenerar">
          <input className="botones" type="button" value="Modificar" />
          <input
            className="botones"
            type="submit"
            value="Guardar"
            disabled={
              !userDataRegistro.email ||
              !userDataRegistro.cedula ||
              !userDataRegistro.nombre ||
              !userDataRegistro.apellido
            }
          />
        </div>
      </form>
    </div>
  );
};
export default CreateClient;
