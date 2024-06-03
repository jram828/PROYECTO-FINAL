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
  const caso = useSelector(state => state.caso); // Asumimos que el detalle del caso se almacena en 'casoDetail'

  useEffect(() => {
    dispatch(getCasoById(id));
  }, [dispatch, id]);
   
  const handleDelete = () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
    if (isConfirmed) {
      dispatch(deleteCaso(id));
      navigate('/home/cases');
      dispatch(getCasos());
    }
  };

 


  return (
    <Layout>
      <div className="container mx-auto py-8">
  <div className="detail-container max-w-3xl mx-auto p-6 bg-primary rounded-lg shadow-md text-white">
    <p className="text-center text-xl font-bold mb-6">Detalle</p>
    
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="detail-label w-1/3">Tipo de caso:</label>
        <input value={caso.TipoDeCasoTipoDeCasoid} className="detail-input w-2/3 p-2 rounded" readOnly />
      </div>

      <div className="flex items-center space-x-4">
        <label className="detail-label w-1/3">Abogado:</label>
        <input value={caso.AbogadoCedulaAbogado} className="detail-input w-2/3 p-2 rounded" readOnly />
      </div>

      <div className="flex items-center space-x-4">
        <label className="detail-label w-1/3">Cliente:</label>
        <input value={caso.ClienteCedulaCliente} className="detail-input w-2/3 p-2 rounded" readOnly />
      </div>

      <div className="flex items-center space-x-4">
        <label className="detail-label w-1/3">Descripcion:</label>
        <input value={caso.descripcion} className="detail-input w-2/3 p-2 rounded" readOnly />
      </div>

      <div className="flex items-center space-x-4">
        <label className="detail-label w-1/3">Fecha de inicio:</label>
        <input value={caso.fecha} className="detail-input w-2/3 p-2 rounded" readOnly />
      </div>

      {caso.fechaFin && (
        <div className="flex items-center space-x-4">
          <label className="detail-label w-1/3">Fecha final:</label>
          <input value={caso.fechaFin} className="detail-input w-2/3 p-2 rounded" readOnly />
        </div>
      )}
    </div>

    <div className="flex justify-between mt-6">
      <button className="btn btn-accent text-white" onClick={handleDelete}>Eliminar caso</button>
      <Link to="/home/cases">
        <button className="btn btn-secondary">Volver</button>
      </Link>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default DetailCasos