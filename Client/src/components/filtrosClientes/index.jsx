import './filtrosClientes.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../cards/index';
import { getClientes, filterCliente } from '../../redux/actions';
import SearchBar from '../searchBarClientes';
import OrderClientes from '../orderCliente/orderCliente';
import { Link  } from 'react-router-dom';


function FiltrosClientes() {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(getClientes());
  }, [dispatch]);

  const handleVerTodosClick = () => {
    dispatch(getClientes());
    setFilterApplied(false); // Reset filter applied state
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterCliente(filtro, inputValue));
    setFilterApplied(true);
  };

  return (
    <div className='container grid grid-cols-2 gap-4'>
      <div className="flex flex-col justify-start gap-4 p-4 rounded-lg bg-primary">
        <Link to="/home/customers/crearcliente" className='btn btn-md hover:bg-primary hover:text-white w-full'>Crear cliente</Link>
        <OrderClientes />
        <SearchBar onFilter={handleFilter} />
        <Link to="/home" className='btn btn-md hover:bg-primary hover:text-white w-full'>Volver</Link>
     </div>
      <div className="">
        <Cards items={clientes} />
        {filterApplied && <button className='btn' onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosClientes;