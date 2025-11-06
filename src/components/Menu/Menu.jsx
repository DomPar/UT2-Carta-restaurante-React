import './menu.css'
import DishesCard from '../DishesCard/DishesCard.jsx'
import MenuFooter from '../MenuFooter/MenuFooter.jsx'
import MenuHeader from '../MenuHeader/MenuHeader.jsx'
import { useEffect, useState } from 'react'
import {getAllMenuData, addCategory } from '../../services/api.js'

const Menu = () => {

    const [products, setProducts] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [reload, setReload] = useState(false);
    
    const toggleEdit = () => setEditMode(v => !v)

    const addCat = async () => {
        const nuevaCategoria = prompt('Nombre de la nueva categoría:')
        if (!nuevaCategoria) return;
            await addCategory(nuevaCategoria);
            setReload(prev => !prev);
    }

    useEffect(() => {
        getAllMenuData().then(data => {
            setProducts(data.menu);
        });
    }, [reload]);

      
    
    return (
        <div id='menuContainer'>
            <MenuHeader/>
            <button id='toggleEditBtn' onClick={toggleEdit}> {editMode ? 'X' : '✏️'} </button>
            <section id='mainMenu'>
            {products.map((categoria, index) => (
                <DishesCard
                key={index}
                id ={categoria.id}
                categoria={categoria.name}
                imagen={categoria.photoURL || "./coffee.jpg"} // Imagen por defecto para la tarea
                items={categoria.products}
                editMode={editMode}
                setProducts={setProducts}
                setReload={setReload}
                />)
             )
            }
            {editMode && 
                <button id='addCategoryBtn' onClick={addCat}>+</button>  
            }
            </section>
            <MenuFooter/>
        </div>
  )
}

export default Menu