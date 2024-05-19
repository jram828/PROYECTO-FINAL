import './cards.css'
import Card from '../card/index'

function Cards({ items }) {

  if (!Array.isArray(items)) {
    return null;
  }
  return (
    <div className='contenedorAbogados'>
      {items.map(item => <Card item={item} key={item.cedulaAbogado ? item.cedulaAbogado : item.cedulaCliente} />)}
    </div>
  );
}

export default Cards;