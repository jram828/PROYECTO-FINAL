import './filtrosCasos.css';
import { useState, useEffect } from 'react';
import TarjetasCasos from '../../components/tarjetasCasos/tarjetasCasos';
import { useSelector, useDispatch } from 'react-redux';
import { filterCasos, getCasos } from '../../redux/actions';
import SearchBar from '../../components/searchBarCasos/searchBar';

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
    <div>
      <SearchBar onFilter={handleFilter} />
      <div>
      <div className='contenedorcasos'>
    
        <TarjetasCasos casos={casos}></TarjetasCasos>
   
    </div>
        {filterApplied && <button onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosCasos;