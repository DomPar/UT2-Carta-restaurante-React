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

    const addCategory = () => {
        const nuevaCategoria = prompt('Nombre de la nueva categoría:')
        const nuevaImagen = './coffee.jpg' // Para simplificar, se usa una imagen fija
        if (!nuevaCategoria || !nuevaImagen) return
            setProducts(prevProducts => [
                ...prevProducts,
                { categoria: nuevaCategoria, imagenCategoria: nuevaImagen, items: [] }
            ])
    }

    const editCategory = (indx) => {
        const nuevoNombre = prompt('Nuevo nombre de la categoría:')
        if (!nuevoNombre) return
        setProducts(prevProducts =>
            prevProducts.map((categoria, i) =>
                i === indx
                    ? { ...categoria, categoria: nuevoNombre }
                    : categoria
            )
        )
    }

    const deleteCategory = (indx) => {
        setProducts(prevProducts =>
            prevProducts.filter((_, i) => i !== indx)
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
                indx ={index} // Por alguna razon no deja usar key como indice para editar categoria
                categoria={categoria.categoria}
                imagen={categoria.imagenCategoria}
                items={categoria.items}
                onAddItem={addItem}
                onDeleteItem={deleteItem}
                onEditItem={editItem}
                editMode={editMode}
                onEditCategory={editCategory}
                onDeleteCategory={deleteCategory}
                />)
             )
            }
            <button id='addCategoryBtn' onClick={addCategory}>+</button>  
            </section>
            <MenuFooter/>
        </div>
  )
}

export default Menu