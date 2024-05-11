import './diary.module.css';
import Calendario from '../../components/calendar';
import FormCita from '../../components/formCrearCita/index';
import { Link  } from 'react-router-dom';

function Diary() {
  
  
  
  return (
    <div>
      <div>
        <p>Agenda</p>
        <Calendario></Calendario>
        <FormCita></FormCita>
        <div>
        <Link to='/home'>
        <button>Volver</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Diary