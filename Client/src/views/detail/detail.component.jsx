import './detail.css';
import { getByIdAbogado, getByIdCliente, setAbogado, setCliente } from "../../redux/actions";
import { useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAbogado, deleteCliente } from '../../redux/actions';
import Layout from '../../components/layout/layout';


function Detail() {

  //const datos = JSON.parse(localStorage.getItem("loggedUser"));

  const source = useSelector((state) => state.source)

  //const cedula = datos.cedulaAbogado ? datos.cedulaAbogado : datos.cedulaCliente
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  /*if (source === 'abogado') {
    var datos = useSelector((state) => state.abogado);
    var { cedula } = useParams();
    useEffect(() => {
      dispatch(getByIdAbogado(cedula));
      //return setAbogado({});
    }, [dispatch, cedula]);
  } else {
    var datos = useSelector((state) => state.cliente);
    var { cedula } = useParams()
    useEffect(() =>{
      dispatch(getByIdCliente(cedula))
      //return setCliente({});
   }, [dispatch, cedula])
    console.log('datos', datos)
  }*/


  const { cedula } = useParams();

  useEffect(() => {
    if (source === 'abogado') {
      dispatch(getByIdAbogado(cedula));
    } else {
      dispatch(getByIdCliente(cedula));
    }

    return () => {
      if (source === 'abogado') {
        dispatch(setAbogado({}));
      } else {
        dispatch(setCliente({}));
      }
    };
  }, [dispatch, cedula, source]);

  const datos = useSelector((state) => (source === 'abogado' ? state.abogado : state.cliente));

 
    const handleDelete = () => {
      if (source === 'abogado') {
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
        if (isConfirmed) {
          dispatch(deleteAbogado(cedula));
          console.log('cedula', cedula);
          navigate('/home/lawyers');
          
        }
      }else {
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
        if (isConfirmed) {
          dispatch(deleteCliente(cedula));
          navigate('/home/customers');
          
        }
      }
    }
   

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="space-y-6 w-full max-w-3xl p-6 bg-primary rounded-lg shadow-md text-white">
          <div>
            <h1 className="text-2xl font-bold">Detail</h1>
          </div>
          <div key={cedula}></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mx-4">
              <label
                htmlFor="nombre"
                className="input input-bordered flex items-center max-w-xs"
              >
                Nombre(s):
                <input
                  type="text"
                  name="nombre"
                  id="name"
                  className="input-field"
                  value={datos?.nombre}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="apellidos"
                className="input input-bordered flex items-center max-w-xs"
              >
                Apellido(s):
                <input
                  type="text"
                  name="apellido"
                  id="lastname"
                  className="input-field"
                  value={datos?.apellido}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mx-4">
              <label
                htmlFor="cedula"
                className="input input-bordered flex items-center max-w-xs"
              >
                Cédula:
                <input
                  type="text"
                  name="cedula"
                  id="cedula"
                  className="input-field"
                  value={cedula}
                  disabled
                />
              </label>
            </div>
            {datos?.matricula && (
              <div className="mx-4">
                <label
                  htmlFor="matricula"
                  className="input input-bordered flex items-center max-w-xs"
                >
                  Matrícula:
                  <input
                    type="text"
                    name="matricula"
                    id="matricula"
                    className="input-field"
                    value={datos.matricula}
                    disabled
                  />
                </label>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mx-4">
              <label
                htmlFor="correo"
                className="input input-bordered flex items-center max-w-xs"
              >
                Correo:
                <input
                  type="text"
                  name="correo"
                  id="correo"
                  className="input-field"
                  value={datos?.correo}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="telefono"
                className="input input-bordered flex items-center max-w-xs"
              >
                Teléfono:
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  className="input-field"
                  value={datos?.telefono}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mx-4">
              <label
                htmlFor="calle"
                className="input input-bordered flex items-center max-w-xs"
              >
                Calle:
                <input
                  type="text"
                  name="calle"
                  id="calle"
                  className="input-field"
                  value={datos?.calle}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="numero"
                className="input input-bordered flex items-center max-w-xs"
              >
                Número:
                <input
                  type="text"
                  name="numero"
                  id="numero"
                  className="input-field"
                  value={datos?.numero}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mx-4">
              <label
                htmlFor="codigoPostal"
                className="input input-bordered flex items-center max-w-xs"
              >
                CP:
                <input
                  type="text"
                  name="codigoPostal"
                  id="codigoPostal"
                  className="input-field"
                  value={datos?.codigoPostal}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="ciudad"
                className="input input-bordered flex items-center max-w-xs"
              >
                Ciudad:
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  className="input-field"
                  value={datos?.ciudad}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="mx-4 max-w-xs">
            <label
              htmlFor="pais"
              className="input input-bordered flex items-center max-w-xs"
            >
              País:
              <input
                type="text"
                name="pais"
                id="pais"
                className="input-field"
                value={datos?.pais}
                disabled
              />
            </label>
          </div>
          <div className="flex justify-center gap-2">
            <button 
            onClick={handleDelete}
            className="btn btn-sm btn-accent text-white">
              Eliminar registro
            </button>
            {datos?.matricula ? (
              <Link to="/home/lawyers">
                <button className="btn btn-sm btn-accent text-white">
                  Volver
                </button>
              </Link>
            ) : (
              <Link to="/home/customers">
                <button className="btn btn-sm btn-accent text-white">
                  Volver
                </button>
              </Link>
            )}
            {datos?.matricula ? undefined : (
              <Link to="/home/documentos/contrato">
                <button className="btn btn-sm btn-accent text-white">
                  Generar contrato
                </button>
              </Link>
            )}
            {datos?.matricula ? undefined : (
              <Link to="/home/documentos/poder">
                <button className="btn btn-sm btn-accent text-white">
                  Generar poder
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Detail