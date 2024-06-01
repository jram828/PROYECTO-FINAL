import { useState } from "react";
import style from "./createClient.module.css";
import { postCliente } from "../../handlers/createCliente"
import { Link } from 'react-router-dom';
import Layout from '../layout/layout'
import axios from "axios";

const CreateCliente = () => {
  const URL_CLOUDINARY =
    "https://api.cloudinary.com/v1_1/dzrqzpflw/image/upload";
   const [urlImage, setUrlImage] = useState("");
  const [userDataRegistro, setUserDataRegistro] = useState({
    cedulaCliente: "",
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    telefono: "",
    calle: "",
    numero: "",
    codigoPostal: "",
    ciudad: "",
    pais: "",
    imagen:"",
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

  const handleChangeImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    console.log(file);

    const data = new FormData();

    console.log(data);

    data.append("file", file);
    data.append("upload_preset", "Preset_LegalTech");

    const response = await axios.post(URL_CLOUDINARY, data);

    setUrlImage(response.data.secure_url);
    console.log(response);
    setUserDataRegistro({
      ...userDataRegistro,
      imagen: response.data.secure_url,
    });
  };

      const handleDeleteImage = (e) => {
        e.preventDefault();
        setUrlImage("");
      };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-primary rounded-lg shadow-md text-white">
          <form
            className={style.datos}
            method="post"
            onSubmit={submitHandlerRegistro}
          >
            <h1 className={style.titulo}>Crear Cliente</h1>
            <br />
            <br />
            <div className="space-y-3">
              <div className="flex flex-wrap justify-around">
                <div className="mb-4">
                  <h2 className="text-xl mb-2">Foto de perfil</h2>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                  />
                  {urlImage && (
                    <div>
                      <img
                        src={urlImage}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <button onClick={handleDeleteImage}>Eliminar</button>
                    </div>
                  )}
                </div>

                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="nombre"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="apellidos"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="flex flex-wrap justify-around">
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="correo"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="password"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="flex flex-wrap justify-around">
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="numerocedula"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="telefono"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="flex flex-wrap justify-around">
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="calle"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="numero"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="flex flex-wrap justify-around">
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="codigopostal"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="ciudad"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="flex flex-wrap justify-around">
                <div className="w-full sm:w-auto mx-4 mb-4">
                  <label
                    htmlFor="pais"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                }
              >
                Guardar
              </button>

              <Link to="/home/customers">
                <button className="btn btn-sm btn-accent text-white">
                  Volver
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default CreateCliente;
