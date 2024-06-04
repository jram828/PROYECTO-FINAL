import './filtrosAbogados.css';
import { useState, useEffect } from 'react';
import Cards from '../cards';
import { useSelector, useDispatch } from 'react-redux';
import { filterAbogado, getAbogados } from '../../redux/actions';
import SearchBar from '../../components/searchBarAbogado/index';
import OrderAbogados from '../../components/orderAbogado/orderAbogado.jsx';
import { Link  } from 'react-router-dom';
import loading from "../../assets/loading.gif";


function FiltrosAbogados() {
  const dispatch = useDispatch();
  const abogados = useSelector((state) => state.abogados);
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);


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
    setSearchPerformed(false);
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterAbogado(filtro, inputValue));
    localStorage.setItem('abogadoFilter', JSON.stringify({ filtro, inputValue }));
    setFilterApplied(true);
    setSearchPerformed(true);
  };

  return (
    <div className="container">
      <div className="md:flex md:flex-row md:space-x-4">
        <div className="md:w-1/3">
          <div className="flex flex-col justify-start gap-4 p-4 rounded-md max-h-screen bg-primary">
            <Link to="/home/lawyers/crearabogado" className="btn btn-md hover:bg-primary hover:text-white w-full">Crear abogado</Link>
            <OrderAbogados />
            <SearchBar onFilter={handleFilter} />
            {filterApplied && <button onClick={handleVerTodosClick} className="btn">Ver todos</button>}
            <Link to="/home" className="btn btn-md hover:bg-primary hover:text-white w-full">Volver</Link>
          </div>
        </div>
        <div className="md:w-2/3 p-2">
          <div className="flex flex-col gap-4">
          {searchPerformed && abogados.length === 0 && (
              <p>No hay coincidencias</p>
            )}
            {!searchPerformed && abogados.length === 0 && (
              <div className="loading-container">
                <h2 className="loading">Cargando...</h2>
                <img className="loading-image" src={loading} alt="loading" />
              </div>
            )}
            {abogados.length > 0 && <Cards items={abogados} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltrosAbogados;