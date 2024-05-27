import './diary.css';
import Calendario from '../../components/calendar';
import FormCita from '../../components/formCrearCita/index';
import Layout from '../../components/layout/layout';

function Diary() {
  
  return (
    <Layout>
      <div className='containerDiary'>
        
        <div className='calendario'> 
          <p className='agenda'>Agenda</p>
          <Calendario></Calendario>
        </div>
        <div className='formCita'>
          <FormCita></FormCita>
        </div>
      </div>
    </Layout>
  )
}

export default Diary