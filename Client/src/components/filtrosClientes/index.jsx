import './filtrosClientes.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../cards/index';
import { getClientes, filterCliente, orderClientes, getClientesTodos } from '../../redux/actions';
import SearchBar from '../searchBarClientes';
import OrderClientes from '../orderCliente/orderCliente';
import { Link } from 'react-router-dom';
import loading from "../../assets/loading.gif";

function FiltrosClientes() {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const pages = useSelector((state)=> state.pages)
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('');


  useEffect(() => {
    dispatch(getClientesTodos()); // Obtener el total de clientes
  }, [dispatch]);

  
  const totalPages = Math.ceil(pages?.length / 6);
  console.log(totalPages)

  console.log('pages', pages)

  useEffect(() => {
    if (order) {
      dispatch(orderClientes(order, currentPage));
    } else {
      dispatch(getClientes(currentPage));
    }
  }, [dispatch, currentPage, order]);

  console.log("order",order,"currentpage", currentPage)
  const handleVerTodosClick = () => {
    setOrder('');
    setCurrentPage(1); 
    dispatch(getClientes(1)); 
    setFilterApplied(false); 
    setSearchPerformed(false);
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterCliente(filtro, inputValue));
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
            <Link to="/home/customers/crearcliente" className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white">
              Crear cliente
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
            </Link>
          </div>
        
        <div className="flex justify-between self-center">
              <div className="flex gap-4"> 
                <OrderClientes onOrderChange={handleOrderChange} />
                <SearchBar onFilter={handleFilter} />
                {filterApplied && <button className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white" onClick={handleVerTodosClick}>Ver todos</button>}
              </div>  
        </div>

          <div className="p-2">
            <div className="flex flex-col">
              {clientes.length > 0 ? (
                <Cards items={clientes} />
              ) : (
                <div className="loading-container">
                  <h2 className="loading">Cargando...</h2>
                  <img className="loading-image" src={loading} alt="loading" />
                </div>
              )}
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
    </div>
  );
}

export default FiltrosClientes;