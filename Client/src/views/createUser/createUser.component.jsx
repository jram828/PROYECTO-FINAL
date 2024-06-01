import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './createUser.css';
import Layout from '../../components/layout/layout';
import { crearUsuario } from '../../handlers/crearUsuario';
// import process from 'dotenv'

// eslint-disable-next-line react/prop-types
function CreateUser () {

  // const URL_CLOUDINARY = import.meta.env.VITE_URL_CLOUDINARY;
   const URL_CLOUDINARY ="https://api.cloudinary.com/v1_1/dzrqzpflw/image/upload";
  // const [ urlImage, setUrlImage] = useState ("")
  
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
      
      // setUrlImage(response.data.secure_url)
      console.log(response)
      setUserDataCrear({
        ...userDataCrear,
        imagen: response.data.secure_url,
      });

    }

    // const handleDeleteImage = (e) => {
    //   e.preventDefault();
    //   setUrlImage("");

    // }
  
    return (
      <Layout>
        <div className="max-w-md mx-auto bg-primary text-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">Crear Usuario</h1>
    
          <h2 className="text-xl mb-2">Foto de perfil</h2>
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleChangeImage}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            />
          </div>
    
        <form
          method="post"
          className="space-y-4"
          onSubmit={submitHandlerCrear}
        >
          <div className="flex justify-around">
            <label htmlFor="correo" className="input input-bordered flex items-center max-w-xs">Email:
            <input
              name="correo"
              type="email"
              value={userDataCrear.correo}
              onChange={handleChangeCrear}
              id="correo"
              className="grow"
            />
            </label>
          </div>
          
          <div className="flex justify-around">
            <label htmlFor="contrasena" className="input input-bordered flex items-center max-w-xs">Contraseña:
            <input
              type="password"
              name="password"
              id="password"
              className="grow"
              value={userDataCrear.password}
              onChange={handleChangeCrear}
            />
            </label>
          </div>
          
          <div>
            <label htmlFor="tipodeusuario" className="block text-base font-medium mb-1"></label>
            <select
              name="rol"
              id="tipodeusuario"
              onChange={handleChangeCrear}
              className="input select-bordered text-md pl-2 !w-80"
            >
              <option value="" className='customOption'>Tipo de Usuario:</option>
              <option value="Administrador" className='customOption'>Administrador</option>
              <option value="Abogado" className='customOption'>Abogado</option>
              <option value="Cliente" className='customOption'>Cliente</option>
            </select>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              name="guardar"
              value="Guardar"
              className="btn btn-sm btn-accent text-white mr-2"
              disabled={!userDataCrear.correo || !userDataCrear.password}
            >Guardar</button>


            <Link to="/" className="">
              <input
                type="button"
                name="Volver"
                value="Volver"
                className="btn btn-sm btn-accent text-white ml-2"
              /> 
            </Link>
          </div>
        </form>
        </div>
      </Layout>
    );
}

export default CreateUser