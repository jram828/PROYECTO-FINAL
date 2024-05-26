import style from'./customers.module.css';
// import { Link  } from 'react-router-dom';
import FiltrosClientes from '../../components/filtrosClientes';
// import OrderClientes from '../../components/orderCliente/orderCliente';



function CustomersPage() {
  

  return (
    <div className={style.container}>
        {/* <p className={style.titulo}>Clientes</p> */}
        {/* <div>
        <Link to="/home/customers/crearcliente">
          <button className='btn btn-accent btn-sm'>Crear cliente</button>
        </Link>
        <Link to="/home">
          <button className='btn btn-accent btn-sm'>Volver</button>
        </Link>
        </div> */}
        
        {/* <OrderClientes></OrderClientes> */}
        <FiltrosClientes></FiltrosClientes>
    </div>
    
  )
}

export default CustomersPage