import style from './home.module.css';
import { Link,  } from 'react-router-dom';
import Lawyers from '../../components/lawyers/lawyers.components';
import Costumers from '../../components/costumers/costumers.component';
import picture from './homepic.jpg'
import logo from './logo.png'
import legaltech from './legaltech.png'

function Home() {
  
  return (
    <div>

    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt='logo'/>
        <img src={legaltech} alt="legaltech" />
      </div>
      <br></br>
    </div>
       
    
    <div className={style.container2}>
      <div className={style.imagen}>
        <img src={picture} alt="homeLawyers" />
      </div>
      <div className={style.container3}>
        <br />
        <Link to="/home/customers">
          <button className={style.btn2}>Cliente</button>
        </Link>
        <Link to="/home/lawyers">
          <button className={style.btn2}>Abogado</button>
        </Link>
        
        <Link to="/home/detail">
          <button className={style.btn}>Datos Personales</button>
        </Link>
        <Link to="/home/cases/:id">
          <button className={style.btn}>Casos</button>
        </Link>
        <Link to="/home/documents/:id">
          <button className={style.btn}>Documentos</button>
        </Link>
        <Link to="/home/diary">
          <button className={style.btn}>Agenda</button>
        </Link>
        <Link to="/home/payments">
          <button className={style.btn}>Pagos</button>
        </Link>
        <Link to="/home/consultation">
          <button className={style.btn}>Consultas</button>
        </Link>
        <Link to="/home/statistics">
          <button className={style.btn}>Estadisticas</button>
        </Link>

        
        <Link to="/">
        <button className={style.btn3}>Salir</button>
        </Link>
      </div>
    </div>
    </div>
  );
}


export default Home
