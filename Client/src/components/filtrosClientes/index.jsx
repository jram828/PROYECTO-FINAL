import './filtrosClientes.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../cards/index';
import { getClientes, filterCliente } from '../../redux/actions';
import SearchBar from '../searchBarClientes';

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
    <div>
      <SearchBar onFilter={handleFilter} />
      <div>
        <Cards items={clientes} />
        {filterApplied && <button className='button' onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosClientes;