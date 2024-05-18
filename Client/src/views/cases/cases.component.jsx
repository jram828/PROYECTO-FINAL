import style from './cases.module.css';



import { Link } from 'react-router-dom';

function Cases() {
  return (
    <div>
      <div>
        <p>Casos</p>
       
      </div>
        <Link to='/home'>
        <button className='button'>Volver</button>
        </Link>
        <Link to='/home/cases/crearcaso'><button className='button'>Crear caso</button></Link>
    </div>
  )
}

export default Cases