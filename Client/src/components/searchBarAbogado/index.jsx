import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAbogado } from '../../redux/actions';

const SearchBar = ({ onFilter }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [ciudad, setCiudad] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const queryParts = [];
    if (nombre) queryParts.push(`nombre=${formatInputValue(nombre)}`);
    if (apellido) queryParts.push(`apellido=${formatInputValue(apellido)}`);
    if (ciudad) queryParts.push(`ciudad=${formatInputValue(ciudad)}`);
    const queryString = queryParts.join('&');

    if (queryString) {
      onFilter(queryString);
      dispatch(filterAbogado(queryString));
    } else {
      console.log('Por favor ingrese al menos un valor de búsqueda');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const formatInputValue = (value) => {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  return (
    <div className="flex gap-2 mb-4 items-center">
  <div className="flex flex-col">
    <input
      placeholder="Nombre"
      type="text"
      value={nombre}
      onKeyDown={handleKeyDown}
      onChange={(e) => handleInputChange(e, setNombre)}
      className="input input-sm w-full max-w-40 !text-black"
    />
  </div>

  <div className="flex flex-col">
    <input
      placeholder="Apellido"
      type="text"
      value={apellido}
      onKeyDown={handleKeyDown}
      onChange={(e) => handleInputChange(e, setApellido)}
      className="input input-sm w-full max-w-40 !text-black"
    />
  </div>

  <div className="flex flex-col">
    <input
      placeholder="Ciudad"
      type="text"
      value={ciudad}
      onKeyDown={handleKeyDown}
      onChange={(e) => handleInputChange(e, setCiudad)}
      className="input input-sm w-full max-w-40 !text-black"
    />
  </div>

  <div className="flex items-center">
    <button onClick={handleSearch} className="btn btn-sm w-40 border border-accent bg-white hover:bg-white flex items-center justify-center">
      Buscar
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg>
    </button>
  </div>
</div>

  );
};

export default SearchBar