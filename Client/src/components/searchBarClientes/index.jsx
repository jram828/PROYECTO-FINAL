import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterCliente } from '../../redux/actions';


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
      dispatch(filterCliente(queryString));
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
    <div className="flex flex-col gap-4 mb-4">
        <div className="input input-bordered flex items-center gap-2 mb-4">
          <label>Nombre:</label>
        <br />
          <input
            placeholder="Busqueda..." 
            type="text" 
            value={nombre} 
            onKeyDown={handleKeyDown}
            onChange={(e) => handleInputChange(e, setNombre)}
            className=""
          />
        </div>
       
       
       <div className="input input-bordered flex items-center gap-2 mb-4">
        <label>Apellido:</label>
       <br />
        <input
          placeholder="Busqueda..." 
          type="text" 
          value={apellido} 
          onKeyDown={handleKeyDown}
          onChange={(e) => handleInputChange(e, setApellido)}
          className=""
        />
       </div>
       
       
       <div className="input input-bordered flex items-center gap-2 mb-4">
        <label className=''>Ciudad:</label>
       <br />
        <input 
          placeholder="Busqueda..." 
          type="text" 
          value={ciudad} 
          onKeyDown={handleKeyDown}
          onChange={(e) => handleInputChange(e, setCiudad)}
          className=""
        />
       </div>
      
       <button onClick={handleSearch} className='btn btn-md hover:bg-primary hover:text-white w-full'>Buscar</button>

    </div>
  );
};

export default SearchBar