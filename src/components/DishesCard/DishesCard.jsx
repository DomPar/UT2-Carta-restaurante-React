import DishList from '../DishList/DishList'
import './DishesCard.css'
import { useState } from 'react'


const DishesCard = ({indx, categoria, imagen, items, onAddItem, onDeleteItem, onEditItem, editMode, onEditCategory, onDeleteCategory}) => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        if (!nombre.trim() || !precio) return

        const nuevoItem = {
            nombreProducto: nombre.trim(),
            precio: parseFloat(precio)
        }

        onAddItem(categoria, nuevoItem)

        setNombre('')
        setPrecio('')
    }

    return (
        <div className='dishesCardContainer'>
            <div className="dishesCardHeader">
                <h2>{categoria}</h2>
                {editMode && 
                    <button className='editBtn' onClick={() => onEditCategory(indx)}>✏️</button>
                }
                {editMode && 
                    <button className='deleteBtn' onClick={() => onDeleteCategory(indx)}>🗑️</button>
                }
            </div>
            <img src={imagen} alt={categoria} />
            <DishList items={items} onEditItem={onEditItem} editMode={editMode} categoria={categoria} onDeleteItem={onDeleteItem}/>
            {editMode && 
            <form id='addDishForm' onSubmit={handleAdd}>
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