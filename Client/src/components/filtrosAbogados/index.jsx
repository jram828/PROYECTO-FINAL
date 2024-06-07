import './filtrosAbogados.css';
import { useState, useEffect } from 'react';
import Cards from '../cards';
import { useSelector, useDispatch } from 'react-redux';
import { filterAbogado, getAbogados, orderAbogados, getAbogadosTodos } from '../../redux/actions';
import SearchBar from '../../components/searchBarAbogado/index';
import OrderAbogados from '../../components/orderAbogado/orderAbogado.jsx';
import { Link  } from 'react-router-dom';
import loading from "../../assets/loading.gif";



function FiltrosAbogados() {
  const dispatch = useDispatch();
  const abogados = useSelector((state) => state.abogados);
  const pages = useSelector((state)=> state.pages)
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('');

  useEffect(() => {
    dispatch(getAbogadosTodos()); 
  }, [dispatch]);

  const totalPages = Math.ceil(pages?.length / 6);
  console.log(totalPages)

  console.log('pages', pages)


  useEffect(() => {
    if (order) {
      dispatch(orderAbogados(order, currentPage));
      const storedFilter = JSON.parse(localStorage.getItem('abogadoFilter'));
      if (storedFilter) {
        setFilterApplied(true);
      }
    } else {
      dispatch(getAbogados(currentPage));
      const storedFilter = JSON.parse(localStorage.getItem('abogadoFilter'));
      if (storedFilter) {
        setFilterApplied(false);
      }
    }
  }, [dispatch, currentPage, order]);

  console.log("order",order,"currentpage", currentPage)
  const handleVerTodosClick = () => {
    setOrder('');
    setCurrentPage(1); 
    dispatch(getAbogados(1)); 
    setFilterApplied(false); 
    setSearchPerformed(false);
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterAbogado(filtro, inputValue));
    localStorage.setItem('abogadoFilter', JSON.stringify({ filtro, inputValue }));
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


  return (
    <div className="flex">
  <div className="md:flex md:flex-col md:space-y-4 w-full">
    
      <div className="flex justify-end p-2">
        <Link to="/home/lawyers/crearabogado" className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white">
          Crear abogado
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
        </Link>
      </div>
    
    
      <div className="flex justify-between self-center">
        
          <div className="flex gap-4">
          <OrderAbogados onOrderChange={handleOrderChange} />
            <SearchBar onFilter={handleFilter} />
            {filterApplied && <button onClick={handleVerTodosClick} className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white">Ver todos</button>}
          </div>
        
      </div>
    
    
      <div className="flex flex-col p-2">
        <div className="flex flex-col">
          {searchPerformed && abogados.length === 0 && (
            <p>No hay coincidencias</p>
          )}
            {!searchPerformed && abogados.length === 0 && (
            <div className="loading-container">
              <img className="loading-image" src={loading} alt="loading" />
            </div>
          )}
            {abogados.length > 0 && <Cards items={abogados} />}
            </div>
            {searchPerformed ? ( undefined) : (
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
                {currentPage < totalPages && (
               <button 
                 onClick={() => handlePageChange(currentPage + 1)}
                 className="join-item btn btn-xs btn-accent"
                   >
                &gt;&gt;
                </button>
               )}
              </div>
            )}
          </div>
        
      </div>
    </div>
  );
}

export default FiltrosAbogados;