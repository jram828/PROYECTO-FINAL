import './detailCases.css';
//import { useEffect } from "react";
import { Link} from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { getCasoById, deleteCaso, getCasos } from '../../redux/actions';
import Layout from '../../components/layout/layout';

function DetailCasos() {

  
  /*const dispatch = useDispatch();
  const navigate = useNavigate()

  
    useEffect(() =>{
      dispatch(getCasoById(id))
   }, [dispatch]);
   
  

 
    const handleDelete = () => {
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
        if (isConfirmed) {
            dispatch(deleteCaso(id));
            navigate('/home/cases');
            dispatch(getCasos())
        }}*/
    
        

  return (
    <Layout>
      <div className="detail-container">
          
            <p>Detalle</p>
            {/*<label className="detail-label">Tipo de caso:</label>
              <input value={tipoCaso} className="detail-input"></input>
              <br></br>
              <label className="detail-label">Abogado:</label>
              <input value={apellidoAbogado} className="detail-input"></input>
              <br></br>
              <label className="detail-label">Cliente:</label>
              <input value={apellidoCliente} className="detail-input"></input>
              <br></br>
              <label className="detail-label">Descripcion:</label>
              <input value={descripcion} className="detail-input"></input>
              <br></br>
              <label className="detail-label">Fecha de inicio:</label>
              <input value={fecha} className="detail-input"></input>
              <br></br>
              <label className="detail-label">Fecha final:</label>
              <input value={cedula} className="detail-input"></input>
              <br></br>
              <br></br>
    <button className='button' onClick={handleDelete}>Eliminar caso</button>*/}
              <Link to='/home/cases'>
              <button>Volver</button>
              </Link>
              
      </div>
    </Layout>
  )
}

export default DetailCasos