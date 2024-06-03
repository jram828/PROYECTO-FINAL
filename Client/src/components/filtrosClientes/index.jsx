import './filtrosClientes.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../cards/index';
import { getClientes, filterCliente } from '../../redux/actions';
import SearchBar from '../searchBarClientes';
import OrderClientes from '../orderCliente/orderCliente';
import { Link } from 'react-router-dom';
import loading from "../../assets/loading.gif";

function FiltrosClientes() {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(getClientes());
  }, [dispatch]);

  const handleVerTodosClick = () => {
    dispatch(getClientes());
    setFilterApplied(false); 
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterCliente(filtro, inputValue));
    setFilterApplied(true);
  };

  return (
    <div className="container">
      <div className="md:flex md:flex-row md:space-x-4">
        <div className="md:w-1/3">
          <div className="flex flex-col justify-start gap-4 p-4 rounded-md max-h-screen bg-primary">
            <Link to="/home/customers/crearcliente" className="btn btn-md hover:bg-primary hover:text-white w-full">Crear cliente</Link>
            <OrderClientes />
            <SearchBar onFilter={handleFilter} />
            {filterApplied && <button className="btn" onClick={handleVerTodosClick}>Ver todos</button>}
            <Link to="/home" className="btn btn-md hover:bg-primary hover:text-white w-full">Volver</Link>
          </div>
        </div>
        <div className="md:w-2/3 p-2">
          <div className="flex flex-col gap-4">
            {clientes.length > 0 ? (
              <Cards items={clientes} />
            ) : (
              <div className="loading-container">
                <h2 className="loading">Cargando...</h2>
                <img className="loading-image" src={loading} alt="loading" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltrosClientes;