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
    
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
    <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-secondary rounded-lg shadow-md text-black">

      <form className={style.datos} method="post" onSubmit={submitHandlerRegistro}>
        <h1 className="text-2xl font-bold text-black text-center">Crear Cliente</h1>
        
        <div className="space-y-3">
          <div className="flex flex-wrap justify-around">
            <div className="mb-4">
              <h2 className="text-lg mb-2 text-center">Foto de perfil</h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              />
              {urlImage && (
                <div>
                  <img src={urlImage} style={{ width: "100px", height: "100px" }} />
                  <button onClick={handleDeleteImage}>Eliminar</button>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              
              <label htmlFor="nombre" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Nombre(s):
                <input
                  type="text"
                  name="nombre"
                  id="name"
                  className="grow ml-2 text-black"
                  value={dataRegistro.nombre}
                  onChange={handleChangeRegistro}
                />
               
                {errors.nombre && (
                  <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.nombre}</p>
                )}
              </label>
            </div>


            <div className="mx-4">
              
              <label htmlFor="apellidos" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Apellido(s):
                <input
                  type="text"
                  className="grow ml-2 text-black"
                  name="apellido"
                  id="lastname"
                  value={dataRegistro.apellido}
                  onChange={handleChangeRegistro}
                />
                {errors.apellido && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.apellido}</p>}
                
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              
              <label htmlFor="correo" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Email:
                <input
                  type="email"
                  name="correo"
                  id="email"
                  className="grow ml-2 text-black"
                  value={dataRegistro.correo}
                  onChange={handleChangeRegistro}
                />
                {errors.correo && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.correo}</p>}
                
              </label>
            </div>
            <div className="mx-4">
              <label htmlFor="password" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Contraseña:
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="grow ml-2 text-black"
                  value={dataRegistro.password}
                  onChange={handleChangeRegistro}
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
             
              <label htmlFor="numerocedula" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Cédula n°:
                <input
                  type="number"
                  className="grow ml-2 text-black"
                  name="cedulaCliente"
                  id="cedula"
                  value={dataRegistro.cedulaCliente}
                  onChange={handleChangeRegistro}
                />
                {errors.cedulaCliente && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.cedulaCliente}</p>}
                
              </label>
            </div>
            <div className="mx-4">
            
              <label htmlFor="telefono" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Teléfono:
                <input
                  type="number"
                  name="telefono"
                  id="telefono"
                  className="grow ml-2 text-black"
                  value={dataRegistro.telefono}
                  onChange={handleChangeRegistro}
                />
                {errors.telefono && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.telefono}</p>}
                
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              
              <label htmlFor="calle" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Calle:
                <input
                  type="text"
                  name="calle"
                  id="street"
                  className="grow ml-2 text-black"
                  value={dataRegistro.calle}
                  onChange={handleChangeRegistro}
                />
                {errors.calle && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.calle}</p>}
               
              </label>
            </div>
            <div className="mx-4">
              
              <label htmlFor="numero" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Número:
                <input
                  type="text"
                  className="grow ml-2 text-black"
                  name="numero"
                  id="numero"
                  value={dataRegistro.numero}
                  onChange={handleChangeRegistro}
                />
                {errors.numero && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.numero}</p>}
               
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              
              <label htmlFor="codigopostal" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                CP:
                <input
                  type="number"
                  className="grow ml-2 text-black"
                  name="codigoPostal"
                  id="codigopostal"
                  value={dataRegistro.codigoPostal}
                  onChange={handleChangeRegistro}
                />
                {errors.codigoPostal && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.codigoPostal}</p>}
               
              </label>
            </div>
            <div className="mx-4">
              
              <label htmlFor="ciudad" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                Ciudad:
                <input
                  type="text"
                  name="ciudad"
                  id="city"
                  className="grow ml-2 text-black"
                  value={dataRegistro.ciudad}
                  onChange={handleChangeRegistro}
                />
                {errors.ciudad && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.ciudad}</p>}
                
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              
              <label htmlFor="pais" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative">
                País:
                <input
                  type="text"
                  name="pais"
                  id="country"
                  className="grow ml-2 text-black"
                  value={dataRegistro.pais}
                  onChange={handleChangeRegistro}
                />
                {errors.pais && <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">{errors.pais}</p>}
                
              </label>
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-center gap-2">
          <Link to="/home/customers">
            <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path>
              </svg>
              Volver
            </button>
          </Link>
          <button
            className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white"
            type="submit"
            value="Guardar"
            disabled={
              !dataRegistro.correo ||
              !dataRegistro.cedulaCliente ||
              !dataRegistro.nombre ||
              !dataRegistro.apellido
            }
          >
            Crear Cliente
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};
export default CreateCliente;
