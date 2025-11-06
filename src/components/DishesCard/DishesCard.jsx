import DishList from '../DishList/DishList'
import './DishesCard.css'
import { useState } from 'react'
import { updateCategory, deleteCategory, addProduct } from '../../services/api'


const DishesCard = ({id, categoria, imagen, items, editMode, setReload}) => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

    const editCat = async () => {
    const nuevoNombre = prompt('Nuevo nombre de la categoría:')
    if (!nuevoNombre) return;
        await updateCategory(id, nuevoNombre);
        setReload(prev => !prev);
    }

    const deleteCat = async () => {
        await deleteCategory(id);
        setReload(prev => !prev);
    }
    
    const addItem = async (e) => {
        e.preventDefault()
        if (!nombre.trim() || !precio) return
        await addProduct(id, nombre.trim(), parseFloat(precio));  
        setReload(prev => !prev);
        setNombre('')
        setPrecio('')
    }

    return (
        <div className='dishesCardContainer'>
            <div className="dishesCardHeader">
                <h2>{categoria}</h2>
                {editMode && 
                    <button className='editBtn' onClick={editCat}>✏️</button>
                }
                {editMode && 
                    <button className='deleteBtn' onClick={deleteCat}>🗑️</button>
                }
            </div>
            <img src={imagen} alt={categoria} />
            <DishList items={items} editMode={editMode} categoria={categoria} setReload={setReload} />
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