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
    <div className="barra_busqueda">
       <label>Nombre:</label>
       <br />
       <input
         placeholder="Busqueda..." 
         type="text" 
         value={nombre} 
         onKeyDown={handleKeyDown}
         onChange={(e) => handleInputChange(e, setNombre)}
       />
       <br />
       <label>Apellido:</label>
       <br />
       <input
         placeholder="Busqueda..." 
         type="text" 
         value={apellido} 
         onKeyDown={handleKeyDown}
         onChange={(e) => handleInputChange(e, setApellido)}
       />
       <br />
       <label>Ciudad:</label>
       <br />
       <input 
         placeholder="Busqueda..." 
         type="text" 
         value={ciudad} 
         onKeyDown={handleKeyDown}
         onChange={(e) => handleInputChange(e, setCiudad)}
       />
       <br />
       <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar