import './detail.css';
import { getByIdAbogado, getByIdCliente } from "../../redux/actions";
import { useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAbogado, deleteCliente } from '../../redux/actions';
import { getAbogados, getClientes} from '../../redux/actions'



function Detail() {

  const datos = JSON.parse(localStorage.getItem("loggedUser"));

  const source = useSelector((state) => state.source)

  const cedula = datos.cedulaAbogado ? datos.cedulaAbogado : datos.cedulaCliente
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  /*if (source === 'abogado') {
    var datos = useSelector((state) => state.abogado);
    var { cedula } = useParams();
    useEffect(() => {
      dispatch(getByIdAbogado(cedula));
    }, [dispatch, cedula]);
  } else {
    var datos = useSelector((state) => state.cliente);
    var { cedula } = useParams()
    useEffect(() =>{
      dispatch(getByIdCliente(cedula))
   }, [dispatch, cedula])
    console.log('datos', datos)
  }*/

 
    const handleDelete = () => {
      if (source === 'abogado') {
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
        if (isConfirmed) {
          dispatch(deleteAbogado(cedula));
          console.log('cedula', cedula);
          navigate('/home/lawyers');
          dispatch(getAbogados())
        }
      }else {
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
        if (isConfirmed) {
          dispatch(deleteCliente(cedula));
          navigate('/home/customers');
          dispatch(getClientes())
        }
      }
    }
   

  return (
    <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-primary rounded-lg shadow-md text-white">
        <div>
          <h1>Detail</h1>
        </div>
        <div key={cedula}></div>
        <div className="detail-form">
          <div className="detail-input-group">
            <label className="detail-label">Cedula:</label>
            <input value={cedula} className="detail-input"></input>
            {datos?.matricula? (
            <label className="detail-label">Matricula:</label>
          ) : undefined }
            {datos?.matricula? (
       <input value={datos.matricula} className="detail-input"></input>
                ) : undefined }
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Nombre(s):</label>
            <input value={datos?.nombre} className="detail-input"></input>
            <label className="detail-label">Apellido(s):</label>
            <input value={datos?.apellido} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Correo:</label>
            <input value={datos?.correo} className="detail-input"></input>
            <label className="detail-label">Telefono:</label>
            <input value={datos?.telefono} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Calle:</label>
            <input value={datos?.calle} className="detail-input"></input>
            <label className="detail-label">Número:</label>
            <input value={datos?.numero} className="detail-input"></input>
            
          </div>
          <br />
          <br />
          <div className="detail-input-group">
            <label className="detail-label">Código Postal:</label>
            <input value={datos?.codigoPostal} className="detail-input"></input>
            <label className="detail-label">Ciudad:</label>
            <input value={datos?.ciudad} className="detail-input"></input>
          </div>
          <br />
          <br />
          <div className="last-input-group">
            <label className="detail-label">Pais:</label>
            <input value={datos?.pais} className="detail-input"></input>
          </div>
          <br />
          <br />
        </div>
 
    <div className="flex justify-center gap-2">
    <button className="btn btn-sm btn-accent text-white" onClick={handleDelete}>Eliminar registro</button>
    {datos?.matricula? (
            <Link to="/home/lawyers">
            <button className="btn btn-sm btn-accent text-white">Volver</button>
          </Link>
          ) : <Link to="/home/customers">
          <button className="btn btn-sm btn-accent text-white">Volver</button>
        </Link> }
    </div>
    
  </div>
  )
}
export default Detail