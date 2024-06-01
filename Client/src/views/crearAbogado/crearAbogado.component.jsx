
import style from './crearAbogado.module.css';
//import { Link } from 'react-router-dom';
//import userStoreLawyers from '../../store/lawyers';
import { useState } from 'react';
import { postAbogado } from '../../handlers/crearAbogado';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import axios from 'axios';

function CrearAbogado() {
  
  //const addLawyer = userStoreLawyers((state) => state.addLawyer);
       const URL_CLOUDINARY =     "https://api.cloudinary.com/v1_1/dzrqzpflw/image/upload";
  const [urlImage, setUrlImage] = useState("");
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
      administrador: '',
      imagen:'',
      
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
            <h1 className={style.titulo}>Crear Abogado</h1>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mx-4">
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
                <div className="mx-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mx-4">
                  <label
                    htmlFor="numerocedula"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
                  <label
                    htmlFor="matricula"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mx-4">
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
                <div className="mx-4">
                  <label
                    htmlFor="password"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mx-4">
                  <label
                    htmlFor="telefono"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mx-4">
                  <label
                    htmlFor="numero"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mx-4">
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
                <div className="mx-4">
                  <label
                    htmlFor="ciudad"
                    className="input input-bordered flex items-center max-w-xs"
                  >
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
              <div>
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
  }

export default CrearAbogado