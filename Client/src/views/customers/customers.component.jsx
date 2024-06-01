import style from'./customers.module.css';
// import { Link  } from 'react-router-dom';
import FiltrosClientes from '../../components/filtrosClientes';
// import OrderClientes from '../../components/orderCliente/orderCliente';
import Layout from '../../components/layout/layout';


function CustomersPage() {
  

  return (
    <Layout>
      <div className={style.container}>
          
          <FiltrosClientes></FiltrosClientes>
      </div>
    </Layout>
  )
}

export default CustomersPage