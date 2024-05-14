import { useState } from "react";
import style from "./createClient.module.css";
import { postCliente } from "../../handlers/createCliente"
import { Link } from 'react-router-dom';

const CreateCliente = () => {
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
      postCliente(userDataRegistro);
    };
  return (
    <div className={style.container}>
      <form className={style.datos} method="post" onSubmit={submitHandlerRegistro}>
        {/* <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" />
        </div> */}
        <h1 className={style.titulo}>Crear Cliente</h1>
        <br />
        <br />

        <div className={style.container2}>
          <label htmlFor="nombre" className={style.labelregistrodecliente}>
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombre"
            id="name"
            className={style.cajaregistrocliente}
            value={userDataRegistro.nombre}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="apellidos" className={style.labelregistrodecliente}>
            Apellido(s):
          </label>
          <input
            type="text"
            className={style.cajaregistrocliente}
            name="apellido"
            id="lastname"
            value={userDataRegistro.apellido}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />

        <div className={style.container2}>
          <label htmlFor="correo" className={style.labelregistrodecliente}>
            Email:
          </label>
          <input
            type="email"
            name="correo"
            id="email"
            className={style.cajaregistrocliente}
            value={userDataRegistro.correo}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="numerocedula" className={style.labelregistrodecliente}>
            Numero de cédula:
          </label>
          <input
            type="number"
            className={style.cajaregistrocliente}
            name="cedulaCliente"
            id="cedula"
            value={userDataRegistro.cedulaCliente}
            onChange={handleChangeRegistro}
          />
          </div>
        <br />
        <br />

        <div className={style.container2}>
          <label htmlFor="telefono" className={style.labelregistrodecliente}>
            {" "}
            Teléfono:
          </label>
          <input
            type="number"
            name="telefono"
            id="telefono"
            className={style.cajaregistrocliente}
            value={userDataRegistro.telefono}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="calle" className={style.labelregistrodecliente}>
            Calle:
          </label>
          <input
            type="text"
            name="calle"
            id="street"
            className={style.cajaregistrocliente}
            value={userDataRegistro.calle}
            onChange={handleChangeRegistro}
          />
        </div>

        <br />
        <br />

        <div className={style.container2}>
          <label htmlFor="numero" className={style.labelregistrodecliente}>
            Numero:
          </label>
          <input
            type="text"
            className={style.cajaregistrocliente}
            name="numero"
            id="numero"
            value={userDataRegistro.numero}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="codigopostal" className={style.labelregistrodecliente}>
            Código postal:
          </label>
          <input
            type="number"
            className={style.cajaregistrocliente}
            name="codigoPostal"
            id="codigopostal"
            value={userDataRegistro.codigoPostal}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />

        <div className={style.container2}>
          <label htmlFor="ciudad" className={style.labelregistrodecliente}>
            Ciudad:
          </label>
          <input
            type="text"
            name="ciudad"
            id="city"
            className={style.cajaregistrocliente}
            value={userDataRegistro.ciudad}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="ciudad" className={style.labelregistrodecliente}>
            Pais:
          </label>
          <input
            type="text"
            name="pais"
            id="country"
            className={style.cajaregistrocliente}
            value={userDataRegistro.pais}
            onChange={handleChangeRegistro}
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
              !userDataRegistro.cedulaCliente ||
              !userDataRegistro.nombre ||
              !userDataRegistro.apellido
            }
          />
           <Link to='/home/customers'><button className="button">Volver</button></Link>
        </div>
      </form>
    </div>
  );
};
export default CreateCliente;
