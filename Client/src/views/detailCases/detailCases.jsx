import './detailCases.css';
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCasoById, deleteCaso, getCasos } from '../../redux/actions';
import Layout from '../../components/layout/layout';

function DetailCasos() {
  const { id } = useParams(); // Obtener el id de los parámetros de la ruta
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const caso = useSelector(state => state.caso); // Asumimos que el detalle del caso se almacena en 'caso'

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Devuelve una cadena vacía si dateString es nulo o indefinido
    const date = new Date(dateString);
    if (isNaN(date)) return ''; // Devuelve una cadena vacía si la fecha no es válida
    return date.toLocaleDateString('es-CA'); // Convierte al formato YYYY-MM-DD
  };

  useEffect(() => {
    dispatch(getCasoById(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
    if (isConfirmed) {
      const fechaFin = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD
      dispatch(deleteCaso(id, fechaFin));
      navigate('/home/cases');
      dispatch(getCasos());
      console.log("id", id, "fechaFin", fechaFin);
    }
  };

  return (
    <Layout>
      <div className="detail-container">
        <p>Detalle</p>
        <label className="detail-label">Tipo de caso:</label>
        <input value={caso?.TipoDeCaso?.descripcion || ''} className="detail-input" readOnly />
        <br />
        <label className="detail-label">Abogado:</label>
        <input value={`${caso?.Abogado?.apellido || ''} ${caso?.Abogado?.nombre || ''}`} className="detail-input" readOnly />
        <br />
        <label className="detail-label">Cliente:</label>
        <input value={`${caso?.Cliente?.apellido || ''} ${caso?.Cliente?.nombre || ''}`} className="detail-input" readOnly />
        <br />
        <label className="detail-label">Descripcion:</label>
        <input value={caso?.descripcion || ''} className="detail-input" readOnly />
        <br />
        <label className="detail-label">Fecha de inicio:</label>
        <input value={formatDate(caso?.fecha)} className="detail-input" readOnly />
        <br />
        {caso?.fechaFin && (
          <>
            <label className="detail-label">Fecha final:</label>
            <input value={formatDate(caso.fechaFin)} className="detail-input" readOnly />
          </>
        )}
        <br />
        {caso?.PagosClientes && caso.PagosClientes.length > 0 && (
        <div>
        <label htmlFor="pagosCliente">Pagos del Cliente:</label>
        <select name="pagosCliente" id="pagosCliente">
        {caso.PagosClientes.map((pago, index) => (
        <option key={index} value={pago.pagoId}>
          {pago.descripcion} - {new Date(pago.fechaDeAprobacion).toLocaleDateString()} - {pago.importeDeLaTransaccion}
        </option>
      ))}
    </select>
  </div>
)}
        <br />
        <button className='button' onClick={handleDelete}>Finalizar caso</button>
        <Link to='/home/cases'>
          <button>Volver</button>
        </Link>
      </div>
    </Layout>
  )
}

export default DetailCasos;