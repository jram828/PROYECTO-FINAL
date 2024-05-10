import './detail.module.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Detail() {
  const usuario =  {}
  return (
    <div>
      <div>
        <p>Detail</p>
      </div>
      <div key={usuario.cedula}></div>
      <div>
        <div>
            <label>Cedula:</label>
            <input value={usuario?.cedula}></input>
            <label>Matricula:</label>
            <input value={usuario?.matricula}></input>
        </div> 
        <br></br>
        <div>   
            <label>Nombre:</label>
            <input value={usuario?.nombre}></input>
            <label>Apellido:</label>
            <input value= {usuario?.apellido}></input>
        </div> 
        <br></br>
        <div>
            <label>Correo:</label>
            <input value={usuario?.correo}></input>
            <label>Telefono:</label>
            <input value={usuario?.telefono}></input>
        </div>
        <br></br>
        <div>
            <label>Domicilio:</label>
            <input value={usuario?.domicilio}></input>
            <label>Número:</label>
            <input value={usuario?.numero}></input>
        </div>  
        <br></br> 
        <div>
            <label>Código Postal:</label>
            <input value={usuario?.codigo_postal}></input>
            <label>Ciudad:</label>
            <input value={usuario?.ciudad}></input>
        </div>
        <br></br>
        <div>
            <label>Pais:</label>
            <input value={usuario?.pais}></input>
            </div>  
            <br></br>
          </div>
          <button>Guardar cambios
          </button>
          <Link to='/home'>
          <button >Volver</button>
          </Link>
    </div>
  )
}

export default Detail