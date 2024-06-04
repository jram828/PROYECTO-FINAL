import { useState } from 'react';
import './datosPersonales.css';
import { Link } from 'react-router-dom';
import { modificarDatos } from '../../redux/actions';
import { useDispatch } from 'react-redux';


function Data() {

    const datos = JSON.parse(localStorage.getItem("loggedUser"));
    const dispatch = useDispatch()

    const cedula = datos.cedulaAbogado ? datos.cedulaAbogado : datos.cedulaCliente
    const [userDataRegistro, setUserDataRegistro] = useState({
    cedulaCliente: datos.cedulaCliente|| datos.cedulaAbogado || '',
    nombre: datos.nombre || '',
    apellido: datos.apellido || '',
    correo: datos.correo || '',
    telefono: datos.telefono || '',
    calle: datos.calle || '',
    numero: datos.numero || '',
    codigoPostal: datos.codigoPostal || '',
    ciudad: datos.ciudad || '',
    pais: datos.pais || '',
    administrador: datos.administrador || '',
    imagen: datos.imagen || '',
      
    });
    console.log(userDataRegistro)

    const handleChangeRegistro = (e) => {
      const { name, value } = e.target;
      setUserDataRegistro(prevState => ({
        ...prevState,
        [name]: value
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modificarDatos(userDataRegistro));
    window.localStorage.setItem("loggedUser", JSON.stringify(userDataRegistro));
  };


  return (
    <div className="detail-container">
    <div>
      <p>Datos personales:</p>
    </div>
    <div key={cedula}></div>
    <form className="detail-form" onSubmit={handleSubmit}>
      <div className="detail-input-group">
        <label className="detail-label">Cedula:</label>
        <input name="cedulaCliente" value={userDataRegistro.cedulaCliente} className="detail-input" readOnly></input>
        {datos?.matricula && (
          <>
            <label className="detail-label">Matricula:</label>
            <input name="matricula" value={userDataRegistro.matricula} className="detail-input" onChange={handleChangeRegistro}></input>
          </>
        )}
      </div>
      <br />
      <br />
      <div className="detail-input-group">
        <label className="detail-label">Nombre(s):</label>
        <input name="nombre" value={userDataRegistro.nombre} className="detail-input" onChange={handleChangeRegistro}></input>
        <label className="detail-label">Apellido(s):</label>
        <input name="apellido" value={userDataRegistro.apellido} className="detail-input" onChange={handleChangeRegistro}></input>
      </div>
      <br />
      <br />
      <div className="detail-input-group">
        <label className="detail-label">Correo:</label>
        <input name="correo" value={userDataRegistro.correo} className="detail-input" onChange={handleChangeRegistro}></input>
        <label className="detail-label">Telefono:</label>
        <input name="telefono" value={userDataRegistro.telefono} className="detail-input" onChange={handleChangeRegistro}></input>
      </div>
      <br />
      <br />
      <div className="detail-input-group">
        <label className="detail-label">Calle:</label>
        <input name="calle" type="text" value={userDataRegistro.calle} className="detail-input" onChange={handleChangeRegistro}></input>
        <label className="detail-label">Número:</label>
        <input name="numero" value={userDataRegistro.numero} className="detail-input" onChange={handleChangeRegistro}></input>
      </div>
      <br />
      <br />
      <div className="detail-input-group">
        <label className="detail-label">Código Postal:</label>
        <input name="codigoPostal" value={userDataRegistro.codigoPostal} className="detail-input" onChange={handleChangeRegistro}></input>
        <label className="detail-label">Ciudad:</label>
        <input name="ciudad" value={userDataRegistro.ciudad} className="detail-input" onChange={handleChangeRegistro}></input>
      </div>
      <br />
      <br />
      <div className="last-input-group">
        <label className="detail-label">Pais:</label>
        <input name="pais" value={userDataRegistro.pais} className="detail-input" onChange={handleChangeRegistro}></input>
      </div>
      <br />
      <br />
      <button type="submit" className="button">Modificar Datos</button>
    </form>
    <Link to="/home">
      <button className="button">Volver</button>
    </Link>
  </div>
  )
}
export default Data

