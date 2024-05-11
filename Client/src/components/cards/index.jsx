import './cards.css'
import Card from '../card/index'

function Cards() {

    const casos = [
        { 
        "id": 1, 
        "tipo": "moratoria", 
         "cedula_cliente": 36352487, 
         "cedula_abogado": 53427165, 
         "fecha": "15-3-23", 
         "descripción": "detalle de este caso......" 
        },
        { "id": 2, 
        "tipo": "sucesión", 
         "cedula_cliente": 36387287, 
         "cedula_abogado": 16127165, 
         "fecha": "10-8-20", 
         "descripción": "detalle de este caso......" 
        },
        { "id": 3, 
        "tipo": "divorcio", 
         "cedula_cliente": 10982487, 
         "cedula_abogado": 15147165, 
         "fecha": "05-2-24", 
         "descripción": "detalle de este caso......" 
        }
    ]

  return (
      <div>
       {casos?.map(caso =>
        <Card caso={caso} key={casos.id}/>)}
      </div>
  )
} 

export default Cards