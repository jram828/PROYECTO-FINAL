import './detail.css';
import { getClienteById } from "../../handlers/detailCliente";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function Detail() {
  
const [usuario, setUsuario] = useState({});
  const { id } = useParams();
  console.log('Details id:', id)
  useEffect(() => {
    const obtenerUsuario = async (id) => {
      try {
        const usuarioActual = await getClienteById(id);
        setUsuario(usuarioActual);
      } catch (error) {
        console.error("Error al obtener el cliente:", error);
      }
    };
  obtenerUsuario(id);
  }, [id]);

  return (
    <div className="detail-container">
        <div>
          <p>Detail</p>
        </div>
        <div key={usuario.cedula}></div>
        <div className="detail-form">
          <div className="detail-input-group">
            <label className="detail-label">Cedula:</label>
            <input value={usuario?.cedula} className="detail-input"></input>
            <label className="detail-label">Matricula:</label>
            <input value={usuario?.matricula} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Nombre(s):</label>
            <input value={usuario?.nombre} className="detail-input"></input>
            <label className="detail-label">Apellido(s):</label>
            <input value={usuario?.apellido} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Correo:</label>
            <input value={usuario?.correo} className="detail-input"></input>
            <label className="detail-label">Telefono:</label>
            <input value={usuario?.telefono} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Domicilio:</label>
            <input value={usuario?.domicilio} className="detail-input"></input>
            <label className="detail-label">Número:</label>
            <input value={usuario?.numero} className="detail-input"></input>
            
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Código Postal:</label>
            <input value={usuario?.codigo_postal} className="detail-input"></input>
            <label className="detail-label">Ciudad:</label>
            <input value={usuario?.ciudad} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="last-input-group">
            <label className="detail-label">Pais:</label>
            <input value={usuario?.pais} className="detail-input"></input>
          </div>
          <br />
          <br />
        </div>
    <button className="button">Guardar cambios</button>
    <Link to="/home">
      <button className="button">Volver</button>
    </Link>
  </div>
  )
}
export default Detail
