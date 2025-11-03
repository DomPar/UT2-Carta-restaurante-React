import './menu.css'
import DishesCard from '../DishesCard/DishesCard.jsx'
import MenuFooter from '../MenuFooter/MenuFooter.jsx'
import MenuHeader from '../MenuHeader/MenuHeader.jsx'
import initialProducts from '../../products.json'
import { useState } from 'react'

const Menu = () => {

    const [products, setProducts] = useState(initialProducts)
    const [editMode, setEditMode] = useState(false)
    
    const toggleEdit = () => setEditMode(v => !v)

    const addCategory = () => {
        const nuevaCategoria = prompt('Nombre de la nueva categoría:')
        const nuevaImagen = './coffee.jpg' // Para simplificar, se usa una imagen fija
        if (!nuevaCategoria || !nuevaImagen) return
            setProducts(prevProducts => [
                ...prevProducts,
                { categoria: nuevaCategoria, imagenCategoria: nuevaImagen, items: [] }
            ])
    }



      
    
    return (
        <div id='menuContainer'>
            <MenuHeader/>
            <button id='toggleEditBtn' onClick={toggleEdit}> {editMode ? 'X' : '✏️'} </button>
            <section id='mainMenu'>
            {products.map((categoria, index) => (
                <DishesCard
                key={index}
                indx ={index} // Por alguna razon no deja usar key como indice para editar categoria
                categoria={categoria.categoria}
                imagen={categoria.imagenCategoria}
                items={categoria.items}
                editMode={editMode}
                setProducts={setProducts}
                />)
             )
            }
            {editMode && 
                <button id='addCategoryBtn' onClick={addCategory}>+</button>  
            }
            </section>
            <MenuFooter/>
        </div>
  )
}

export default Menu