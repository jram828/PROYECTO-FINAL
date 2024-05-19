import './filtrosAbogados.css';
import { useState, useEffect } from 'react';
import Cards from '../cards';
import { useSelector, useDispatch } from 'react-redux';
import { filterAbogado, getAbogados } from '../../redux/actions';
import SearchBar from '../../components/searchBarAbogado/index';

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
    <div>
      <SearchBar onFilter={handleFilter} />
      <div>
        <Cards items={abogados} />
        {filterApplied && <button onClick={handleVerTodosClick}>Ver todos</button>}
      </div>
    </div>
  );
}

export default FiltrosAbogados;