import './filtrosCasos.css';
import { useState, useEffect } from 'react';
import TarjetasCasos from '../../components/tarjetasCasos/tarjetasCasos';
import { useSelector, useDispatch } from 'react-redux';
import { filterCasos, getCasos } from '../../redux/actions';
import SearchBar from '../../components/searchBarCasos/searchBar';
import OrderCasos from '../../components/orderCasos/orderCasos';
import { Link } from 'react-router-dom';

function FiltrosCasos() {
  const dispatch = useDispatch();
  const casos = useSelector((state) => state.casos);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(getCasos());
    const storedFilter = JSON.parse(localStorage.getItem('casosFilter'));
    if (storedFilter) {
      setFilterApplied(true);
    }
  }, []);

  console.log('casos', casos)

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

  
  if (!casos || !casos.datosPagina) {
    return null;
  }

  return (
    <div className='container grid grid-cols-2 gap-4'>
      <div className="flex flex-col justify-start gap-4 p-4 rounded-lg bg-primary">
        <Link to='/home/cases/crearcaso' className='btn btn-md hover:bg-primary hover:text-white w-full'>
          <button >Crear caso</button>
        </Link>
        <OrderCasos />
        <SearchBar onFilter={handleFilter} />
        <Link to='/home' className='btn btn-md hover:bg-primary hover:text-white w-full'>
          <button >Volver</button>
        </Link>
      </div>
      <div>
      <div className=''>
    
        <TarjetasCasos casos={casos}></TarjetasCasos>
   
    </div>
        {filterApplied && <button className='btn' onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosCasos;