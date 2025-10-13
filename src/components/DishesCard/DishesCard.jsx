import React from 'react'
import './DishesCard.css'

const DishesCard = ({categoria, imagen, items}) => {
  return (
    <div className='dishesCardContainer'>
        <h2>{categoria}</h2>
        <img src={imagen} alt={categoria} />
        <ul id='dishList'>
        {items.map((item, i) => (
          <li id='dishRow' key={i}>
            <span className='nombre'>{item.nombreProducto}</span>
            <span className='precio'>{item.precio.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishesCard