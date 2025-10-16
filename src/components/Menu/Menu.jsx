import React from 'react'
import './menu.css'
import DishesCard from '../DishesCard/DishesCard.jsx'
import MenuFooter from '../MenuFooter/MenuFooter.jsx'
import MenuHeader from '../MenuHeader/MenuHeader.jsx'

const Menu = ({ data }) => {
  return (
    <div id='menuContainer'>
        <MenuHeader/>
        <hr className="separador" />
        {data.map((categoria, index) => (
            <DishesCard
            key={index}
            categoria={categoria.categoria}
            imagen={categoria.imagenCategoria}
            items={categoria.items}
            />)
            )
        }
        <hr className="separador" />
        <MenuFooter/>
    </div>
  )
}

export default Menu