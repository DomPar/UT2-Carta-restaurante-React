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

    const addItem = (categoriaNombre, nuevoItem) => {
        setProducts(prevProducts =>
            prevProducts.map(categoria => {
                if (categoria.categoria === categoriaNombre) {
                    return {
                        ...categoria,
                        items: [...categoria.items, nuevoItem]
                    }
                }
                return categoria
            })
        )
    }

    const deleteItem = (categoriaNombre, index) => {
        setProducts(prevProducts =>
            prevProducts.map(categoria => {
                if (categoria.categoria === categoriaNombre) {
                    const nuevosItems = categoria.items.filter((_, i) => i !== index)
                    return { ...categoria, items: nuevosItems }
                }
                return categoria
            })
        )
    }

    const editItem = (categoriaNombre, index) => {
        const nuevoNombre = prompt('Nuevo nombre del producto:')
        const nuevoPrecio = prompt('Nuevo precio:')
        if (!nuevoNombre || !nuevoPrecio) return

        setProducts(prevProducts =>
            prevProducts.map(categoria => {
                if (categoria.categoria === categoriaNombre) {
                    const nuevosItems = categoria.items.map((item, i) =>
                        i === index
                            ? { ...item, nombreProducto: nuevoNombre, precio: parseFloat(nuevoPrecio) }
                            : item
                    )
                    return { ...categoria, items: nuevosItems }
                }
                return categoria
            })
        )
    }


    return (
        <div id='menuContainer'>
            <MenuHeader/>
            <button id='toggleEditBtn' onClick={toggleEdit}> {editMode ? 'X' : '✏️'} </button>
            <section id='mainMenu'>
            {products.map((categoria, index) => (
                <DishesCard
                key={index}
                categoria={categoria.categoria}
                imagen={categoria.imagenCategoria}
                items={categoria.items}
                onAddItem={addItem}
                onDeleteItem={deleteItem}
                onEditItem={editItem}
                editMode={editMode}
                />)
             )
            }
            </section>

            <MenuFooter/>
        </div>
  )
}

export default Menu