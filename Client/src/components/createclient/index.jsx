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
      password:"",
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
    // <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md text-white">
    //   <form className={style.datos} method="post" onSubmit={submitHandlerRegistro}>
    //     {/* <div className="logo-aveza">
    //       <img src={logo} alt="logo-aveza" />
    //     </div> */}
    //     <h1 className={style.titulo}>Crear Cliente</h1>
    //     <br />
    //     <br />

    //     <div>
    //       <div className={style.container2}>
    //         <label htmlFor="nombre" className={style.labelregistrodecliente}>
    //           Nombre(s):
    //         </label>
    //         <input
    //           type="text"
    //           name="nombre"
    //           id="name"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.nombre}
    //           onChange={handleChangeRegistro}
    //         />
    //         <label htmlFor="apellidos" className={style.labelregistrodecliente}>
    //           Apellido(s):
    //         </label>
    //         <input
    //           type="text"
    //           className={style.cajaregistrocliente}
    //           name="apellido"
    //           id="lastname"
    //           value={userDataRegistro.apellido}
    //           onChange={handleChangeRegistro}
    //         />
    //       </div>
    //       <br />
    //       <br />

    //       <div className={style.container2}>
    //         <label htmlFor="correo" className={style.labelregistrodecliente}>
    //           Email:
    //         </label>
    //         <input
    //           type="email"
    //           name="correo"
    //           id="email"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.correo}
    //           onChange={handleChangeRegistro}
    //         />
    //         <label htmlFor="password" className={style.labelregistrodecliente}>
    //           Contraseña:
    //         </label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.password}
    //           onChange={handleChangeRegistro}
    //         />
    //         <label htmlFor="numerocedula" className={style.labelregistrodecliente}>
    //           Numero de cédula:
    //         </label>
    //         <input
    //           type="number"
    //           className={style.cajaregistrocliente}
    //           name="cedulaCliente"
    //           id="cedula"
    //           value={userDataRegistro.cedulaCliente}
    //           onChange={handleChangeRegistro}
    //         />
    //         </div>
    //       <br />
    //       <br />

    //       <div className={style.container2}>
    //         <label htmlFor="telefono" className={style.labelregistrodecliente}>
    //           {" "}
    //           Teléfono:
    //         </label>
    //         <input
    //           type="number"
    //           name="telefono"
    //           id="telefono"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.telefono}
    //           onChange={handleChangeRegistro}
    //         />

    //         <label htmlFor="calle" className={style.labelregistrodecliente}>
    //           Calle:
    //         </label>
    //         <input
    //           type="text"
    //           name="calle"
    //           id="street"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.calle}
    //           onChange={handleChangeRegistro}
    //         />
    //       </div>

    //       <br />
    //       <br />

    //       <div className={style.container2}>
    //         <label htmlFor="numero" className={style.labelregistrodecliente}>
    //           Numero:
    //         </label>
    //         <input
    //           type="text"
    //           className={style.cajaregistrocliente}
    //           name="numero"
    //           id="numero"
    //           value={userDataRegistro.numero}
    //           onChange={handleChangeRegistro}
    //         />

    //         <label htmlFor="codigopostal" className={style.labelregistrodecliente}>
    //           Código postal:
    //         </label>
    //         <input
    //           type="number"
    //           className={style.cajaregistrocliente}
    //           name="codigoPostal"
    //           id="codigopostal"
    //           value={userDataRegistro.codigoPostal}
    //           onChange={handleChangeRegistro}
    //         />
    //       </div>
    //       <br />
    //       <br />

    //       <div className={style.container2}>
    //         <label htmlFor="ciudad" className={style.labelregistrodecliente}>
    //           Ciudad:
    //         </label>
    //         <input
    //           type="text"
    //           name="ciudad"
    //           id="city"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.ciudad}
    //           onChange={handleChangeRegistro}
    //         />
    //         <label htmlFor="ciudad" className={style.labelregistrodecliente}>
    //           Pais:
    //         </label>
    //         <input
    //           type="text"
    //           name="pais"
    //           id="country"
    //           className={style.cajaregistrocliente}
    //           value={userDataRegistro.pais}
    //           onChange={handleChangeRegistro}
    //         />
    //         <br />
    //         <br />
    //       </div>

    //       <br />
    //       <div className={style.documentoagenerar}>
            
    //         <input
    //           className="button"
    //           type="submit"
    //           value="Guardar"
    //           disabled={
    //             !userDataRegistro.correo ||
    //             !userDataRegistro.cedulaCliente ||
    //             !userDataRegistro.nombre ||
    //             !userDataRegistro.apellido
    //           }
    //         />
    //         <Link to='/home/customers'><button className="btn-md btn-accent w-40">Volver</button></Link>
    //       </div>
    //     </div>
        
    //   </form>
    // </div>
    <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-primary rounded-lg shadow-md text-white">
     <form className={style.datos} method="post" onSubmit={submitHandlerRegistro}>
      <h1 className={style.titulo}>Crear Cliente</h1>
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
              id="password"
              className="grow"
              value={userDataRegistro.password}
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
              name="cedulaCliente"
              id="cedula"
              value={userDataRegistro.cedulaCliente}
              onChange={handleChangeRegistro}
            />
            </label>
          </div>
          <div className="mx-4">
            <label htmlFor="telefono" className="input input-bordered flex items-center max-w-xs">
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
        </div>

        <div className="flex justify-around">
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
          <div className="mx-4">
            <label htmlFor="numero" className="input input-bordered flex items-center max-w-xs">
              Número:
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
          
        </div>

        <div className="flex justify-around">
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
          
        </div>
        <div>
        <div className="mx-4">
            <label htmlFor="pais" className="input input-bordered flex items-center max-w-xs">
              País:
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
      </div>

      <br />
        <div className="flex justify-center gap-2">
          <button
            className="btn btn-sm btn-accent text-white"
            type="submit"
            value="Guardar"
            disabled={
              !userDataRegistro.correo ||
              !userDataRegistro.cedulaCliente ||
              !userDataRegistro.nombre ||
              !userDataRegistro.apellido
            }>
              Guardar
            </button>
          
          <Link to='/home/customers'><button className="btn btn-sm btn-accent text-white">Volver</button></Link>
        </div>
  </form>
</div>

  );
};
export default CreateCliente;
