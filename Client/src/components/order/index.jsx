import style from './order.module.css';

function Order() {
  return (
    <div className={style.container}>
      <div className={style.container2}>
      <select className={style.select}>
        <option className={style.option}>Ordenar</option>
        <option className={style.option}>A-Z</option>
        <option className={style.option}>Z-A</option>
        <option className={style.option}>Mayor-Menor</option>
        <option className={style.option}>Menor-Mayor</option>
      </select>
      </div>
    </div>
  )
}

export default Order