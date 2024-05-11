import axios from 'axios';


  export async function getAbogados() {
    try {
      const response = await axios.get('http://localhost:3001/abogados');

      return response.data
     
    } catch (error) {
      console.error('Error al obtener abogados:', error.message);
      throw error;
    }
  };


