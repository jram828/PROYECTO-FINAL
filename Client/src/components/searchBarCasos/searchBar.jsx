import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterCasos } from '../../redux/actions';


const SearchBar = ({ onFilter }) => {
  const [tipoCaso, setTipoCaso] = useState('');
  const [apellidoAbogado, setApellidoAbogado] = useState('');
  const [apellidoCliente, setApellidoCliente] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const queryParts = [];
    if (tipoCaso) queryParts.push(`tipoCaso=${formatInputValue(tipoCaso)}`);
    if (apellidoAbogado) queryParts.push(`apellidoAbogado=${formatInputValue(apellidoAbogado)}`);
    if (apellidoCliente) queryParts.push(`apellidoCliente=${formatInputValue(apellidoCliente)}`);
    const queryString = queryParts.join('&');

    if (queryString) {
      onFilter(queryString);
      dispatch(filterCasos(queryString));
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

       <label>Tipo de caso:</label>
       <br />
       <input
         placeholder="Busqueda..." 
         type="text" 
         value={tipoCaso} 
         onKeyDown={handleKeyDown}
         onChange={(e) => handleInputChange(e, setTipoCaso)}
       />
       <br />
       <label>Apellido abogado:</label>
       <br />
       <input
         placeholder="Busqueda..." 
         type="text" 
         value={apellidoAbogado} 
         onKeyDown={handleKeyDown}
         onChange={(e) => handleInputChange(e, setApellidoAbogado)}
       />
       <br />
       <label>Apellido Cliente:</label>
       <br />
       <input 
         placeholder="Busqueda..." 
         type="text" 
         value={apellidoCliente} 
         onKeyDown={handleKeyDown}
         onChange={(e) => handleInputChange(e, setApellidoCliente)}
       />
       <br />
       <button onClick={handleSearch}>Buscar</button>

    </div>
  );
};

export default SearchBar