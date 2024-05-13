import './cards.css'
import Card from '../card/index'

function Cards({ items }) {
  return (
    <div className='contenedorAbogados'>
      {items?.map(item => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default Cards;