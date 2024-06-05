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
    
      <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
        <div >
        <Link to='/home'>
          <button className="btn btn-xs border border-accent bg-white hover:bg-white " type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
            Volver</button>
        </Link>
          <h1 className="text-2xl font-bold text-black text-center">Consultas</h1>
          <div className="consultations-list">
            {loadingState ? (
              <div className="loading-container">
              <h2 className="loading">Cargando...</h2>
              <img className="loading-image" src={loading} alt="loading" />
            </div>
            ) : consultas && consultas.length > 0 ? (
              consultas.map((consulta) => (
                <div key={consulta.id} className="space-y-6 h-full p-6 bg-secondary rounded-lg shadow-md text-black mt-4">
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
    
  )
}

export default AllConsultations

