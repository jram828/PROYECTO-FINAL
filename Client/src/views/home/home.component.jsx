import style from './home.module.css';
import { Link,  } from 'react-router-dom';
import picture from "../../assets/homepic.jpg";
import logo from '../../assets/logo.png'
import legaltech from "../../assets/legaltech.png";

function Home() {
  
  return (
    <div>
      {/* <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <img src={legaltech} alt="legaltech" />
        </div>
        <br></br>
      </div> */}

      <div className={style.container2}>
        <div className={style.imagen}>
          <img src={picture} alt="homeLawyers" />
        </div>
        <div className={style.container3}>
          <br />
          <br />
          <Link to="/home/customers">
            <button className={style.btn2}>Clientes</button>
          </Link>
          <Link to="/home/lawyers">
            <button className={style.btn2}>Abogados</button>
          </Link>

          <Link to="/home/detail">
            <button className={style.btn}>Datos Personales</button>
          </Link>
          <Link to="/home/cases">
            <button className={style.btn}>Casos</button>
          </Link>
          <Link to="/home/documents">
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
