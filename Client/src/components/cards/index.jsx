import './cards.css';
import Card from '../card/index';


function Cards({ items, config }) {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <div  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4">
  {items.map((item, index) => (
    <Card 
      item={item} 
      key={index} 
      config={config} 
    />
  ))}
</div>
  );
}

export default Cards;