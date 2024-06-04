import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './consultations.css'
import { postConsulta } from '../../redux/actions';
import Layout from '../../components/layout/layout';
import { useNavigate } from 'react-router-dom';
import validation from '../../components/validation/validation';


function Consultations() {

  const navigate = useNavigate()

  const [dataRegistro, setDataRegistro] = useState({
    nombre:"",
    apellido:"", 
    correo:"", 
    telefono:"",
    consulta:"",
  });

  const [errors, setErrors]= useState({});

  const handleChangeRegistro = (e) => {
    const { name, value } = e.target;
    setDataRegistro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors(validation({
      ...dataRegistro,
      [name]: value,
    }))
  };

  const submitHandlerRegistro =  (e) => {
    e.preventDefault();
    try {
       postConsulta(dataRegistro);

      window.alert("Consulta creado con éxito");
      setDataRegistro({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        consulta: "",
        
      });
      navigate('/')
    } catch (error) {
      console.error("Error al crear la consulta:", error.message);
      window.alert("No se pudo crear la consulta");
    }
  };

  console.log('data', dataRegistro)

  /*useEffect(() => {
    if( dataRegistro.nombre !== '' || dataRegistro.apellido !== '' || dataRegistro.correo !== '' || dataRegistro.telefono!== '' || dataRegistro.consulta !== '' ) {
        const dataValidated = validation(dataRegistro);
        setErrors(dataValidated);
    }
 }, [dataRegistro])*/

  return (
    <Layout>
    <div>
    <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={submitHandlerRegistro} className="detail-form">
        <div className="input input-bordered flex items-center gap-2">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={dataRegistro.nombre}
            onChange={handleChangeRegistro}
            className="grow"
            required
          />
           {errors.nombre && 
            <p className="error_form">
            {errors.nombre}
            </p>}
        </div>
        <br />
        <div className="input input-bordered flex items-center gap-2">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            name="apellido"
            value={dataRegistro.apellido}
            onChange={handleChangeRegistro}
            className="grow"
            required
          />
           {errors.apellido && 
            <p className="error_form">
            {errors.apellido}
            </p>}
        </div>
        <br />
        <div className="input input-bordered flex items-center gap-2">
          <label htmlFor="correo">Email:</label>
          <input
            type="email"
            name="correo"
            value={dataRegistro.correo}
            onChange={handleChangeRegistro}
            className="grow"
            required
          />
           {errors.correo && 
            <p className="error_form">
            {errors.correo}
            </p>}
        </div>
        <br />
        <div className="input input-bordered flex items-center gap-2">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={dataRegistro.telefono}
            onChange={handleChangeRegistro}
            className="grow"
            required
          />
           {errors.telefono && 
            <p className="error_form">
            {errors.telefono}
            </p>}
        </div>
        <br />
        <div className="form-control">
          <label
            htmlFor="consulta"
            className={`label-text absolute left-3 top-3 text-left pointer-events-none transition-all transform origin-top-left duration-200 ease-in-out ${
              dataRegistro.consulta ? 'translate-y-[-1.5rem] scale-75' : ''
            }`}
          >
            Consulta:
          </label>
          <textarea
            name="consulta"
            id="consulta"
            value={dataRegistro.consulta}
            onChange={handleChangeRegistro}
            className="textarea textarea-bordered h-24"
            placeholder="Escriba su consulta aquí"
            rows="5"
            required
          />
        </div>
        <div className="detail-buttons">
          <button 
          type="submit" 
          className="btn btn-accent btn-sm"
          disabled={!dataRegistro.nombre || !dataRegistro.apellido || !dataRegistro.correo || !dataRegistro.telefono || errors.nombre || errors.apellido|| errors.correo || errors.telefono || dataRegistro.consulta == '' }
          >Enviar Consulta</button>
          <Link to="/">
            <button 
            className="btn btn-accent btn-sm" 
            type="button">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  </div>
  </Layout>
);
}

export default Consultations;

