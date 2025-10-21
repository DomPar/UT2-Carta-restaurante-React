import './DishesCard.css'
import { useState } from 'react'


const DishesCard = ({categoria, imagen, items, onAddItem, onDeleteItem, onEditItem, editMode}) => {

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
            <h2>{categoria}</h2>
            <img src={imagen} alt={categoria} />
            <ul id='dishList'>
            {items.map((item, i) => (
                <li id='dishRow' key={i}>
                <span className='nombre'>{item.nombreProducto}</span>
                <span className='precio'>{item.precio.toFixed(2)}
                    {editMode && 
                        <button className='editBtn' onClick={() => onEditItem(categoria, i)}>✏️</button>
                    }
                    {editMode && 
                    <button className='deleteBtn' onClick={() => onDeleteItem(categoria, i)}>🗑️</button>
                    }
                </span>
                </li>
            ))}
            </ul>
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