import DishList from '../DishList/DishList'
import './DishesCard.css'
import { useState } from 'react'


const DishesCard = ({indx, categoria, imagen, items, editMode, setProducts}) => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

    const editCategory = () => {
    const nuevoNombre = prompt('Nuevo nombre de la categoría:')
    if (!nuevoNombre) return
        setProducts(prevProducts =>
            prevProducts.map((category, i) =>
                i === indx
                    ? { ...category, categoria: nuevoNombre }
                    : category
            )
        )
    }

    const deleteCategory = () => {
        setProducts(prevProducts =>
            prevProducts.filter((_, i) => i !== indx)
        )
    }
    
    const addItem = (e) => {
        e.preventDefault()
        if (!nombre.trim() || !precio) return  
        const nuevoItem = {
            nombreProducto: nombre.trim(),
            precio: parseFloat(precio)
        }
        setNombre('')
        setPrecio('')
        setProducts(prevProducts =>
            prevProducts.map((categoria, i) => {
                if (i === indx) {
                    return {
                        ...categoria,
                        items: [...categoria.items, nuevoItem]
                    }
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
            prevProducts.map(category => {
                if (category.categoria === categoriaNombre) {
                    const nuevosItems = category.items.map((item, i) =>
                        i === index
                            ? { ...item, nombreProducto: nuevoNombre, precio: parseFloat(nuevoPrecio) }
                            : item
                    )
                    return { ...category, items: nuevosItems }
                }
                return category
            })
        )
    }
    
    const deleteItem = (categoriaNombre, index) => {
        setProducts(prevProducts =>
            prevProducts.map(category => {
                if (category.categoria === categoriaNombre) {
                    const nuevosItems = category.items.filter((_, i) => i !== index)
                    return { ...category, items: nuevosItems }
                }
                return category
            })
        )
    }

    return (
        <div className='dishesCardContainer'>
            <div className="dishesCardHeader">
                <h2>{categoria}</h2>
                {editMode && 
                    <button className='editBtn' onClick={() => editCategory()}>✏️</button>
                }
                {editMode && 
                    <button className='deleteBtn' onClick={() => deleteCategory()}>🗑️</button>
                }
            </div>
            <img src={imagen} alt={categoria} />
            <DishList items={items} onEditItem={editItem} editMode={editMode} categoria={categoria} onDeleteItem={deleteItem}/>
            {editMode && 
            <form id='addDishForm' onSubmit={addItem}>
                <input
                    type='text'
                    placeholder='Nombre producto'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type='number'
                    step='0.01'
                    placeholder='Precio'
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                <button type='submit'>+</button>
            </form>
            }
        </div>
    )
}

export default DishesCard