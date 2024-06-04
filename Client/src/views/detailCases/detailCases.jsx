import './detailCases.css';
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCasoById, deleteCaso, getCasos } from '../../redux/actions';


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
    
    <div className="flex bg-white rounded-lg items-center justify-center min-h-screen p-6">
    <div className="space-y-6 w-full max-w-3xl p-6 bg-secondary rounded-lg shadow-md text-black">
      <h1 className="text-2xl font-bold text-black text-center">Detalle</h1>
  
      <div className="space-y-4">
        <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
          Tipo de caso:
          <input value={caso?.TipoDeCaso?.descripcion || ''} className="grow text-neutral input-field ml-2" disabled />
        </label>
  
        <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
          Abogado:
          <input value={`${caso?.Abogado?.apellido || ''} ${caso?.Abogado?.nombre || ''}`} className="grow text-neutral input-field ml-2" disabled />
        </label>
  
        <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
          Cliente:
          <input value={`${caso?.Cliente?.apellido || ''} ${caso?.Cliente?.nombre || ''}`} className="grow text-neutral input-field ml-2" disabled />
        </label>
  
        <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
          Descripcion:
          <input value={caso?.descripcion || ''} className="grow text-neutral input-field ml-2" disabled />
        </label>
  
        <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
          Fecha de inicio:
          <input value={formatDate(caso?.fecha)} className="grow text-neutral input-field ml-2" disabled />
        </label>
  
        {caso?.fechaFin && (
          <label className="input input-bordered flex items-center max-w-xs mx-auto">
            Fecha final:
            <input value={formatDate(caso.fechaFin)} className="grow text-black input-field" readOnly />
          </label>
        )}
  
        {caso?.PagosClientes && caso.PagosClientes.length > 0 && (
          <label htmlFor="pagosCliente" className="input input-bordered flex items-center max-w-xs mx-auto">
            Pagos del Cliente:
            <select name="pagosCliente" id="pagosCliente" className="grow text-black input-field">
              {caso.PagosClientes.map((pago, index) => (
                <option key={index} value={pago.pagoId}>
                  {pago.descripcion} - {new Date(pago.fechaDeAprobacion).toLocaleDateString()} - {pago.importeDeLaTransaccion}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
  
      <div className="flex justify-center gap-2 mt-4">
        <button className="btn btn-sm w-35 border border-error bg-white hover:bg-white" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path>
          </svg>
          Eliminar registro
        </button>
        <Link to='/home/cases'>
          <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path>
            </svg>
            Volver
          </button>
        </Link>
      </div>
    </div>
  </div>
  

  )
}

export default DetailCasos;