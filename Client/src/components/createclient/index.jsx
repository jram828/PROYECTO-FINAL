import { useState, useEffect } from "react";
import style from "./createClient.module.css";
import { postCliente } from "../../handlers/createCliente";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import validation from '../../components/validation/validation';


const CreateCliente = () => {

  const navigate = useNavigate()

  const URL_CLOUDINARY =
    "https://api.cloudinary.com/v1_1/dzrqzpflw/image/upload";
  const [urlImage, setUrlImage] = useState("");
  const [dataRegistro, setDataRegistro] = useState({
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
    imagen: "",
  });

  const [errors, setErrors]= useState({});

  const handleChangeRegistro = (e) => {
    setDataRegistro({
      ...dataRegistro,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
    setErrors(validation({
      ...dataRegistro,
      [e.target.name]: e.target.value,
  }))
  };

  const submitHandlerRegistro = (e) => {
    e.preventDefault();
    try {
    postCliente(dataRegistro);
      
    window.alert("Cliente creado con éxito");
    navigate('/home/customers')
    } catch (error) {
    window.alert("No se pudo crear el cliente");
  }

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
    setDataRegistro({
      ...dataRegistro,
      imagen: response.data.secure_url,
    });
  };

  const handleDeleteImage = (e) => {
    e.preventDefault();
    setUrlImage("");
  };

  /*useEffect(() => {
    if( dataRegistro.nombre !== '' || dataRegistro.apellido !== '' || dataRegistro.cedulaCliente !== '' || dataRegistro.telefono!== '' || dataRegistro.correo !== '' ||
    dataRegistro.calle !== '' || dataRegistro.numero!== '' || dataRegistro.ciudad !== '' || dataRegistro.pais !== '' || dataRegistro.codigoPostal !== ''
    ) {
        const dataValidated = validation(dataRegistro);
        setErrors(dataValidated);
    }
 }, [dataRegistro])*/

  return (
    
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-primary rounded-lg shadow-md text-white">
          <form
            className={style.datos}
            method="post"
            onSubmit={submitHandlerRegistro}
          >
            <h1 className={style.titulo}>Crear Cliente</h1>
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
              </div>
              <div className="flex flex-wrap justify-around">
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
                      value={dataRegistro.nombre}
                      onChange={handleChangeRegistro}
                    />
                    {errors.nombre && 
                    <p className="error_form">
                    {errors.nombre}
                   </p>}
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
                      value={dataRegistro.apellido}
                      onChange={handleChangeRegistro}
                    />
                    {errors.apellido && 
                    <p className="error_form">
                    {errors.apellido}
                   </p>}
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
                      value={dataRegistro.correo}
                      onChange={handleChangeRegistro}
                    />
                    {errors.correo && 
                    <p className="error_form">
                    {errors.correo}
                   </p>}
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
                      value={dataRegistro.password}
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
                      value={dataRegistro.cedulaCliente}
                      onChange={handleChangeRegistro}
                    />
                    {errors.cedulaCliente && 
                    <p className="error_form">
                    {errors.cedulaCliente}
                   </p>}
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
                      value={dataRegistro.telefono}
                      onChange={handleChangeRegistro}
                    />
                    {errors.telefono && 
                    <p className="error_form">
                    {errors.telefono}
                   </p>}
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
                      value={dataRegistro.calle}
                      onChange={handleChangeRegistro}
                    />
                    {errors.calle && 
                    <p className="error_form">
                    {errors.calle}
                   </p>}
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
                      value={dataRegistro.numero}
                      onChange={handleChangeRegistro}
                    />
                    {errors.numero && 
                    <p className="error_form">
                    {errors.numero}
                   </p>}
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
                      value={dataRegistro.codigoPostal}
                      onChange={handleChangeRegistro}
                    />
                    {errors.codigoPostal && 
                    <p className="error_form">
                    {errors.codigoPostal}
                   </p>}
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
                      value={dataRegistro.ciudad}
                      onChange={handleChangeRegistro}
                    />
                    {errors.ciudad && 
                    <p className="error_form">
                    {errors.ciudad}
                   </p>}
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
                      value={dataRegistro.pais}
                      onChange={handleChangeRegistro}
                    />
                    {errors.pais && 
                    <p className="error_form">
                    {errors.pais}
                   </p>}
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
                  !dataRegistro.correo ||
                  !dataRegistro.cedulaCliente ||
                  !dataRegistro.nombre ||
                  !dataRegistro.apellido
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
    
  );
};
export default CreateCliente;
