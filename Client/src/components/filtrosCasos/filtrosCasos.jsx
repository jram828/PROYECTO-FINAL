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
    <div className='container grid grid-cols-2 gap-4'>
      {user.administrador === true || user.cedulaAbogado ? (
        <div className="flex flex-col justify-start gap-4 p-4 rounded-lg bg-primary">
          <Link to='/home/cases/crearcaso' className='btn btn-md hover:bg-primary hover:text-white w-full'>
            <button>Crear caso</button>
          </Link>
          <OrderCasos />
          <SearchBar onFilter={handleFilter} />
          <Link to='/home' className='btn btn-md hover:bg-primary hover:text-white w-full'>
            <button>Volver</button>
          </Link>
        </div>
      ) : (
        <Link to='/home' className='btn btn-md hover:bg-primary hover:text-white w-full'>
          <button>Volver</button>
        </Link>
      )}
      <div>
        <div className=''>
          {isLoading ? (
            <div className="loading-container">
              <h2 className="loading">Cargando...</h2>
              <img className="loading-image" src={loading} alt="loading" />
            </div>
          ) : (
            <TarjetasCasos casos={userCasos}></TarjetasCasos>
          )}
        </div>
        {filterApplied && <button className='btn' onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosCasos;