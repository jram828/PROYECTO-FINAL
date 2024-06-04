import './allConsultation.css';
import Layout from '../../components/layout/layout';
import { getConsultas } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import loading from "../../assets/loading.gif";


function AllConsultations() {

  const dispatch = useDispatch();
  const consultas = useSelector((state) => state.consultas);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      await dispatch(getConsultas());
      setLoadingState(false);
    };
    fetchData();
  }, [dispatch]);

  console.log("consultas", consultas)

  return (
    <Layout>
      <div>
        <div>
          <p>Consultas</p>
          <div className="consultations-list">
            {loadingState ? (
              <div className="loading-container">
              <h2 className="loading">Cargando...</h2>
              <img className="loading-image" src={loading} alt="loading" />
            </div>
            ) : consultas && consultas.length > 0 ? (
              consultas.map((consulta) => (
                <div key={consulta.id} className="consulta-item">
                  <h3>Consulta n°{consulta.id}</h3>
                  <p><strong>Remitente:</strong> {consulta.apellido}{consulta.nombre} </p>
                  <p><strong>Fecha:</strong> {consulta.createdAt.split('T')[0]}</p>
                  <p><strong>Consulta:</strong>{consulta.consulta}</p>
                  <p><strong>Email:</strong> {consulta.correo}</p>
                  <p><strong>Telefono:</strong> {consulta.telefono}</p>
                  {/*<button>Responder</button>*/}
                </div>
              ))
            ) : (
              <p>No hay consultas disponibles</p>
            )}
          </div>
        </div>
        <br />
        <br />
        <Link to='/home'>
          <button className="btn btn-accent btn-sm" type="button">Volver</button>
        </Link>
      </div>
    </Layout>
  )
}

export default AllConsultations

