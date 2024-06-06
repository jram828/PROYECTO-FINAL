import './filtrosCasos.css';
import { useState, useEffect } from 'react';
import TarjetasCasos from '../../components/tarjetasCasos/tarjetasCasos';
import { useSelector, useDispatch } from 'react-redux';
import { filterCasos, getCasos } from '../../redux/actions';
import SearchBar from '../../components/searchBarCasos/searchBar';
import OrderCasos from '../../components/orderCasos/orderCasos';
import { Link } from 'react-router-dom';
import loading from "../../assets/loading.gif";

function FiltrosCasos() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const dispatch = useDispatch();
  const casos = useSelector((state) => state.casos);
  const [filterApplied, setFilterApplied] = useState(false);

  console.log("user", user)

  useEffect(() => {
    dispatch(getCasos());
    const storedFilter = JSON.parse(localStorage.getItem('casosFilter'));
    if (storedFilter) {
      setFilterApplied(true);
    }
  }, [dispatch]);

  const handleVerTodosClick = () => {
    dispatch(getCasos());
    localStorage.removeItem('casosFilter');
    setFilterApplied(false); 
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterCasos(filtro, inputValue));
    localStorage.setItem('casosFilter', JSON.stringify({ filtro, inputValue }));
    setFilterApplied(true);
  };

  const isLoading = !casos || !casos.datosPagina;

  const userCasos = !isLoading && (user.administrador ?
    casos.datosPagina :
    casos.datosPagina.filter((caso => 
      (caso.nombreCliente === user.nombre && caso.apellidoCliente === user.apellido) || 
      (caso.nombreabogado === user.nombre && caso.apellidoAbogado === user.apellido)
    ))
  );

  console.log("usercasos", userCasos)

  return (
    <div className="container md:flex md:flex-col md:space-y-4">
  <div className="flex justify-end p-4">
    {user.administrador === true || user.cedulaAbogado ? (
      <Link to='/home/cases/crearcaso' className='btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white'>
        Crear caso
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
      </Link>
    ) : null}
  </div>

  <div className="flex flex-col gap-4 p-4 rounded-md max-h-screen bg-white">
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div>
          <OrderCasos />
        </div>
        <div>
          <SearchBar onFilter={handleFilter} />
        </div>
        {filterApplied && (
          <button onClick={handleVerTodosClick} className="btn btn-sm bg-accent text-white hover:bg-primary hover:text-white">
            Ver todos
          </button>
        )}
      </div>
    </div>
  </div>

  <div className="md:flex md:flex-row md:space-x-4">
    <div className="p-2">
      <div className="flex flex-col gap-4">
        {isLoading ? (
          <div className="loading-container">
            <h2 className="loading">Cargando...</h2>
            <img className="loading-image" src={loading} alt="loading" />
          </div>
        ) : (
          <TarjetasCasos casos={userCasos} />
        )}
      </div>
    </div>
  </div>
</div>

  
  );
}

export default FiltrosCasos;