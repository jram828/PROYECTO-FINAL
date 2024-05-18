import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './createUser.css';
import { crearUsuario } from '../../handlers/crearUsuario';


// eslint-disable-next-line react/prop-types
function CreateUser () {

  const URL_CLOUDINARY = import.meta.env.VITE_URL_CLOUDINARY;

  const [ urlImage, setUrlImage] = useState ("")
  
    const [userDataCrear, setUserDataCrear] = useState({
      correo: "",
      password: "",
      imagen: "",
      rol: "",
    });
  
    const handleChangeCrear = (e) => {
      setUserDataCrear({
        ...userDataCrear,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
    };
  
    const submitHandlerCrear = (e) => {
      e.preventDefault();
      console.log('Datos crear usuario: ',userDataCrear)
      crearUsuario(userDataCrear)
    };

    const handleChangeImage = async (e) => {
      e.preventDefault();
      const file = e.target.files[0];

      console.log(file);

      const data = new FormData();

      console.log(data);

      data.append("file",file);
      data.append("upload_preset", "Preset_LegalTech");

      const response = await axios.post(URL_CLOUDINARY, data)
      
      setUrlImage(response.data.secure_url)
      console.log(response)
      setUserDataCrear({
        ...userDataCrear,
        imagen: response.data.secure_url,
      });

    }

    const handleDeleteImage = (e) => {
      e.preventDefault();
      setUrlImage("");

    }
  
    return (
      <div className="contenedorcrearusuario">
        <h1 className="titulo">Crear Usuario</h1>
        <h2>Foto de perfil</h2>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
          ></input>
          {urlImage && (
            <div>
              <img src={urlImage} style={{ width: "100px", height: "100px" }} />
              <button onClick={handleDeleteImage}>Eliminar</button>
            </div>
          )}
        </div>

        <form
          method="post"
          className="formulario"
          onSubmit={submitHandlerCrear}
        >
          <br />
          <br />
          <div className="nombreapellido">
            <label htmlFor="correo" className="labelcrearusuario">
              Email:
            </label>
            <input
              name="correo"
              type="email"
              value={userDataCrear.correo}
              onChange={handleChangeCrear}
              id="correo"
              className="cajascrearusuario"
            />
            <label htmlFor="contrasena" className="labelcrearusuario">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="cajascrearusuario"
              value={userDataCrear.password}
              onChange={handleChangeCrear}
            />
            {/* <label htmlFor="nombre" className="labelcrearusuario">
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombres"
              id="name"
              className="cajascrearusuario"
              value={userDataCrear.nombres}
              onChange={handleChangeCrear}
            /> */}
            {/* <label htmlFor="apellidos" className="labelcrearusuario">
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              className="cajascrearusuario"
              value={userDataCrear.apellidos}
              onChange={handleChangeCrear}
            /> */}
          </div>

          {/* <br />
          <br />
          <div className="cedulaemail">
            <label htmlFor="numerocedula" className="labelcrearusuario">
              Numero de cédula:
            </label>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className="cajascrearusuario"
              value={userDataCrear.cedula}
              onChange={handleChangeCrear}
            />
          </div> */}

          {/* <br />
          <br /> */}
          {/* <div className="direccioncelular">
            <label htmlFor="direccion" className="labelcrearusuario">
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              className="cajascrearusuario"
              value={userDataCrear.direccion}
              onChange={handleChangeCrear}
            />
            <label htmlFor="telefono" className="labelcrearusuario">
              Celular:
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              className="cajascrearusuario"
              value={userDataCrear.celular}
              onChange={handleChangeCrear}
            />
          </div> */}

          {/* <br />
          <br /> */}
          <div className="ciudadcontrasena">
            <label htmlFor="tipodeusuario">Tipo de usuario:</label>
            <select name="rol" id="idusuario" onChange={handleChangeCrear}>
              <option value="">Elija una opcion</option>
              <option value="Administrador">Administrador</option>
              <option value="Abogado">Abogado</option>
              <option value="Cliente">Cliente</option>
            </select>
            {/* <label htmlFor="ciudad" className="labelcrearusuario">
              Ciudad:
            </label>
            <input
              type="text"
              name="nombre_ciudad"
              id="city"
              className="cajascrearusuario"
              value={userDataCrear.nombre_ciudad}
              onChange={handleChangeCrear}
            /> */}
          </div>

          {/* <br />
          <br />
          <div className="paiscontrasena">
            <label htmlFor="pais" className="labelcrearusuario">
              Pais:
            </label>
            <input
              type="text"
              name="nombre_pais"
              id="country"
              className="cajascrearusuario"
              value={userDataCrear.nombre_pais}
              onChange={handleChangeCrear}
            />
            <label
              htmlFor="codigopostalcontrasena"
              className="labelcrearusuario"
            >
              Codigo Postal:
            </label>
            <input
              type="text"
              name="codigo_postal"
              id="code"
              className="cajascrearusuario"
              value={userDataCrear.codigo_postal}
              onChange={handleChangeCrear}
            />
          </div> */}
          <br />
          <br />
          <div className="botonescrearusuario">
            <input
              type="submit"
              name="guardar"
              value="Guardar"
              className="button"
              disabled={!userDataCrear.correo || !userDataCrear.password}
            />

            <Link to="/">
              <input
                type="button"
                name="Volver"
                value="volver"
                className="button"
              />
            </Link>
          </div>
          <br />
        </form>
      </div>
    );
}

export default CreateUser