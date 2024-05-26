import './cards.css';
import Card from '../card/index';

function Cards({ items, config }) {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <div className='contenedorAbogados'>
      {items.map(item => (
        <Card 
          item={item} 
          key={item.id} 
          config={config} 
        />
      ))}
    </div>
  );
}

export default Cards;