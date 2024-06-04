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
    <div className="container">
  <div className="md:flex md:flex-col md:space-y-4">
    <div>
      <div className="flex justify-end p-4">
        <Link to="/home/lawyers/crearabogado" className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white">
          Crear abogado
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-4 p-4 rounded-md max-h-screen bg-white">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 ml-0">
            <OrderAbogados />
            <SearchBar onFilter={handleFilter} />
            {filterApplied && <button onClick={handleVerTodosClick} className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white">Ver todos</button>}
          </div>
        </div>
      </div>
    </div>
    <div className="md:flex md:flex-row md:space-x-4">
      <div className="p-2">
        <div className="flex flex-col gap-4">
          {abogados.length > 0 ? (
            <Cards items={abogados} />
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
</div>

  );
}

export default FiltrosAbogados;