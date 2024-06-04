import './detail.css';
import { getByIdAbogado, getByIdCliente, setAbogado, setCliente } from "../../redux/actions";
import { useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAbogado, deleteCliente } from '../../redux/actions';



function Detail() {

  //const datos = JSON.parse(localStorage.getItem("loggedUser"));

  const source = useSelector((state) => state.source)

  //const cedula = datos.cedulaAbogado ? datos.cedulaAbogado : datos.cedulaCliente
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
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

    const handleGenerateContract = () => {
      navigate('/home/documentos/contrato', { state: { cliente: datos } });
    };

    const handleGeneratePoder = () => {
      navigate('/home/documentos/poder', { state: { cliente: datos } });
      
    };
   

  return (
    
      <div className="flex bg-white rounded-lg items-center justify-center min-h-screen p-6">
        <div className="space-y-6 w-full max-w-3xl p-6 bg-secondary rounded-lg shadow-md text-black">
          <div>
            <h1 className="text-2xl font-bold text-black text-center">Detail</h1>
          </div>

          <div key={cedula}></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              <label
                htmlFor="nombre"
                className="input input-sm input-bordered flex items-center max-w-xs"
              >
                Nombre(s):
                <input
                  type="text"
                  name="nombre"
                  id="name"
                  className="input-field ml-2"
                  value={datos?.nombre}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="apellidos"
                className="input input-sm flex items-center max-w-xs"
              >
                Apellido(s):
                <input
                  type="text"
                  name="apellido"
                  id="lastname"
                  className="input-field ml-2"
                  value={datos?.apellido}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              <label
                htmlFor="cedula"
                className="input input-sm flex items-center max-w-xs"
              >
                Cédula:
                <input
                  type="text"
                  name="cedula"
                  id="cedula"
                  className="input-field ml-2"
                  value={cedula}
                  disabled
                />
              </label>
            </div>
            {datos?.matricula && (
              <div className="mx-4">
                <label
                  htmlFor="matricula"
                  className="input input-sm flex items-center max-w-xs"
                >
                  Matrícula:
                  <input
                    type="text"
                    name="matricula"
                    id="matricula"
                    className="input-field ml-2"
                    value={datos.matricula}
                    disabled
                  />
                </label>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              <label
                htmlFor="correo"
                className="input input-sm flex items-center max-w-xs"
              >
                Correo:
                <input
                  type="text"
                  name="correo"
                  id="correo"
                  className="input-field ml-2"
                  value={datos?.correo}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="telefono"
                className="input input-sm flex items-center max-w-xs"
              >
                Teléfono:
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  className="input-field ml-2"
                  value={datos?.telefono}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              <label
                htmlFor="calle"
                className="input input-sm flex items-center max-w-xs"
              >
                Calle:
                <input
                  type="text"
                  name="calle"
                  id="calle"
                  className="input-field ml-2"
                  value={datos?.calle}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="numero"
                className="input input-sm flex items-center max-w-xs"
              >
                Número:
                <input
                  type="text"
                  name="numero"
                  id="numero"
                  className="input-field ml-2"
                  value={datos?.numero}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mx-4">
              <label
                htmlFor="codigoPostal"
                className="input input-sm flex items-center max-w-xs"
              >
                CP:
                <input
                  type="text"
                  name="codigoPostal"
                  id="codigoPostal"
                  className="input-field ml-2"
                  value={datos?.codigoPostal}
                  disabled
                />
              </label>
            </div>
            <div className="mx-4">
              <label
                htmlFor="ciudad"
                className="input input-sm flex items-center max-w-xs"
              >
                Ciudad:
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  className="input-field ml-2"
                  value={datos?.ciudad}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="mx-4 max-w-xs">
            <label
              htmlFor="pais"
              className="input input-sm flex items-center max-w-xs"
            >
              País:
              <input
                type="text"
                name="pais"
                id="pais"
                className="input-field ml-2"
                value={datos?.pais}
                disabled
              />
            </label>
          </div>
          <div className="flex justify-center gap-2">
            <button 
            onClick={handleDelete}
            className="btn btn-sm w-35 border border-error bg-white hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path></svg>
              Eliminar registro
            </button>
            {datos?.matricula ? (
              <Link to="/home/lawyers">
                <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
                  Volver
                </button>
              </Link>
            ) : (
              <Link to="/home/customers">
                <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
                  Volver
                </button>
              </Link>
            )}
            {datos?.matricula ? undefined : (
              <button onClick={handleGenerateContract} className="btn btn-sm btn-accent text-white">
              Generar contrato
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
            </button>
            )}
            {datos?.matricula ? undefined : (
              
                <button onClick={handleGeneratePoder} className="btn btn-sm btn-accent text-white">
                  Generar poder
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
                </button>
             
            )}
          </div>
        </div>
      </div>
   
  );
}
export default Detail