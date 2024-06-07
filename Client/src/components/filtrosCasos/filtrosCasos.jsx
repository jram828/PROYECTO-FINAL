import './filtrosCasos.css';
import { useState, useEffect } from 'react';
import TarjetasCasos from '../../components/tarjetasCasos/tarjetasCasos';
import { useSelector, useDispatch } from 'react-redux';
import { filterCasos, getCasos, orderCasos, getCasosTodos } from '../../redux/actions';
import SearchBar from '../../components/searchBarCasos/searchBar';
import OrderCasos from '../../components/orderCasos/orderCasos';
import { Link } from 'react-router-dom';
import loading from "../../assets/loading.gif";

function FiltrosCasos() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const dispatch = useDispatch();
  const casos = useSelector((state) => state.casos);
  const pages = useSelector((state)=> state.pages)
  const [filterApplied, setFilterApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [order, setOrder] = useState('');


  useEffect(() => {
    dispatch(getCasosTodos()); 
  }, [dispatch]);

  const todos = pages?.datosPagina;
  const totalPages = Math.ceil(todos.length / 6);
  console.log(totalPages)

  console.log('pages', pages)



  useEffect(() => {
    if (order) {
      dispatch(orderCasos(order, currentPage));
    } else {
      dispatch(getCasos(currentPage)); 
    const storedFilter = JSON.parse(localStorage.getItem('casosFilter'));
    if (storedFilter) {
      setFilterApplied(true);
    }
    }
  }, [dispatch, currentPage, order]);


  console.log("order",order,"currentpage", currentPage)
  const handleVerTodosClick = () => {
    setOrder('');
    setCurrentPage(1); 
    dispatch(getCasos(1));
    localStorage.removeItem('casosFilter');
    setFilterApplied(false); 
    setSearchPerformed(false);
  };



  const handleFilter = (filtro, inputValue) => {
    dispatch(filterCasos(filtro, inputValue));
    localStorage.setItem('casosFilter', JSON.stringify({ filtro, inputValue }));
    setFilterApplied(true);
    setSearchPerformed(true);
  };

 const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    setCurrentPage(1); 
  };


  const isLoading = !casos || !casos.datosPagina;

  const userCasos = !isLoading && (user.administrador ?
    casos.datosPagina :
    casos.datosPagina.filter((caso => 
      (caso.nombreCliente === user.nombre && caso.apellidoCliente === user.apellido) || 
      (caso.nombreabogado === user.nombre && caso.apellidoAbogado === user.apellido)
    ))
  );

  return (
    <div className="flex w-full">
      <div className="md:flex md:flex-col md:space-y-4 w-full">
        <div className="flex justify-end p-2">
          {user.administrador === true || user.cedulaAbogado ? (
            <Link to='/home/cases/crearcaso' className='btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white'>
              Crear caso
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
            </Link>
          ) : null}
        </div>

        <div className="flex justify-between self-center">
          <div className="flex gap-4">
            <OrderCasos onOrderChange={handleOrderChange}/>
            <SearchBar onFilter={handleFilter} />
            {filterApplied && (
              <button onClick={handleVerTodosClick} className="btn btn-sm bg-accent text-white hover:bg-primary hover:text-white">
                Ver todos
              </button>
            )}
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-col">
            {isLoading ? (
              <div className="loading-container">
                <h2 className="loading">Cargando...</h2>
                <img className="loading-image" src={loading} alt="loading" />
              </div>
            ) : (
              <>
                <TarjetasCasos casos={userCasos} />
                {searchPerformed ? (undefined) : (
              <div className="pagination mt-4 join self-center">
                {currentPage > 1 && (
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="join-item btn btn-xs btn-accent"
                  >
                    &lt;&lt;
                  </button>
                )}
                <span className="join-item btn btn-xs btn-accent">Página {currentPage}</span>
                {currentPage < casos.totalPaginas && (
                  <button 
                  className="join-item btn btn-xs btn-accent"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    &gt;&gt;
                  </button>
                )}
              </div>
              )}
                
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltrosCasos;