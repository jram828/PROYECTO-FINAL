import style from'./customers.module.css';
import { Link  } from 'react-router-dom';
import FiltrosClientes from '../../components/filtrosClientes';
import OrderClientes from '../../components/orderCliente/orderCliente';



function CustomersPage() {
  

  return (
    <div className={style.container}>
        <p className={style.titulo}>Clientes</p>
        <Link to="/home/customers/crearcliente">
          <button className='button'>Crear cliente</button>
        </Link>
        <Link to="/home">
          <button className='button'>Volver</button>
        </Link>
        <OrderClientes></OrderClientes>
        <FiltrosClientes></FiltrosClientes>
        
    </div>
      
     
   
    
    
  )
}

export default CustomersPage