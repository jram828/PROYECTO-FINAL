import style from'./customers.module.css';
// import { Link  } from 'react-router-dom';
import FiltrosClientes from '../../components/filtrosClientes';
// import OrderClientes from '../../components/orderCliente/orderCliente';



function CustomersPage() {
  

  return (
    
      <div className={style.container}>
          <FiltrosClientes></FiltrosClientes>
      </div>
    
  )
}

export default CustomersPage