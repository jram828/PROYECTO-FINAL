import './filtrosAbogados.css';
import { useState, useEffect } from 'react';
import Cards from '../cards';
import { useSelector, useDispatch } from 'react-redux';
import { filterAbogado, getAbogados } from '../../redux/actions';
import SearchBar from '../../components/searchBarAbogado/index';
import OrderAbogados from '../../components/orderAbogado/orderAbogado.jsx';
import { Link  } from 'react-router-dom';


function FiltrosAbogados() {
  const dispatch = useDispatch();
  const abogados = useSelector((state) => state.abogados);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(getAbogados());
    const storedFilter = JSON.parse(localStorage.getItem('abogadoFilter'));
    if (storedFilter) {
      setFilterApplied(true);
    }
  }, [dispatch]);

  const handleVerTodosClick = () => {
    dispatch(getAbogados());
    localStorage.removeItem('abogadoFilter');
    setFilterApplied(false); 
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterAbogado(filtro, inputValue));
    localStorage.setItem('abogadoFilter', JSON.stringify({ filtro, inputValue }));
    setFilterApplied(true);
  };

  return (
    <div className="container grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-start gap-4 p-4 rounded-lg bg-primary">
        <Link to="/home/lawyers/crearabogado">
          <button className='btn btn-md hover:bg-primary hover:text-white w-full'>Crear abogado</button>
        </Link>
        <OrderAbogados />
        <SearchBar onFilter={handleFilter} />
        <Link to="/home">
          <button className='btn btn-md hover:bg-primary hover:text-white w-full'>Volver</button>
        </Link>
      </div>
      <div>
        <Cards items={abogados} />
        {filterApplied && <button onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosAbogados;