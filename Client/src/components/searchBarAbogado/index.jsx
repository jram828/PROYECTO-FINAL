import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNameAbogado } from '../../redux/actions';

const SearchBar = () => {


  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log('value',event.target.value)
  };

  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const formattedInputValue = formatInputValue(inputValue);
      dispatch(filterNameAbogado(formattedInputValue));
    } 
  };

  const formatInputValue = (value) => {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };


  return (
    <div className="barra_busqueda">
      <label>Buscar por nombre: </label>
      <input 
        className='busqueda' 
        placeholder="Busqueda..." 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      
    </div>
  );
};

export default SearchBar;