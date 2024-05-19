import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNameCliente } from '../../redux/actions';
import style from "./searchBarClientes.module.css";

const SearchBar = ({onFilter}) => {

  const [filtro, setFiltro] = useState('');
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    setFiltro(e.target.value);
  };
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (filtro && inputValue) {
        const formattedInputValue = formatInputValue(inputValue);
        onFilter(filtro, formattedInputValue);
        dispatch(filterNameCliente(filtro, formattedInputValue));
      } else {
        console.log('Por favor seleccione un rango');
      }
    }
  };

  const formatInputValue = (value) => {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  console.log('filtro', filtro)
  console.log('dato', inputValue)
  

  return (
    <div className="barra_busqueda">
      <select
        className={style.select}
        onChange={handleFieldChange}
        value={filtro}
      >
        <option value="">Buscar por:</option>
        <option value="nombre">Nombre:</option>
        <option value="apellido">Apellido:</option>
        <option value="ciudad">Ciudad:</option>
      </select>
      <input
        className={style.input}
        placeholder="Busqueda..."
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;