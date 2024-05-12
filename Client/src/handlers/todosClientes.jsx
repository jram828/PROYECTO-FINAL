import axios from 'axios';


  export async function getClientes() {
    try {
      const response = await axios.get('https://legaltech-6u3y.onrender.com/clientes');
      return response.data
     
    } catch (error) {
      console.error('Error al obtener clientes:', error.message);
      throw error;
    }
  };