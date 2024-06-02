import './allConsultation.css';
import Layout from '../../components/layout/layout';
import { getConsultas } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function AllConsultations() {

  const dispatch = useDispatch();
  const consultas = useSelector((state) => state.consultas);

  useEffect(() => {
    dispatch(getConsultas());
  }, [dispatch]);

  console.log("consultas", consultas)

  return (
    <Layout>
      <div>
        <div>
          <p>Consultas</p>
          <div className="consultations-list">
          {consultas && consultas.length > 0 ? (
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
      </div>
    </Layout>
  )
}

export default AllConsultations

