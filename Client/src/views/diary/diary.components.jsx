import './diary.css';
import Calendario from '../../components/calendar';
import FormCita from '../../components/formCrearCita/index';


function Diary() {
  
  return (
    
      <div className='containerDiary '>
        
        <div className='calendario'> 
          <p className='agenda'>Agenda</p>
          <Calendario></Calendario>
        </div>
        <div className='formCita'>
          <FormCita></FormCita>
        </div>
      </div>
    
  )
}

export default Diary