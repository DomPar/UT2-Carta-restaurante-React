import './DishList.css'
import { updateProduct, deleteProduct } from '../../services/api'

const DishList = ({items, editMode, setReload}) => {

    const editItem = async (idItem) => {
        const nuevoNombre = prompt('Nuevo nombre del producto:')
        const nuevoPrecio = prompt('Nuevo precio:')
        if (!nuevoNombre || !nuevoPrecio) return
        await updateProduct(idItem, nuevoNombre, parseFloat(nuevoPrecio));
        setReload(prev => !prev);
    }

    const deleteItem = async (idItem) => {
        await deleteProduct(idItem);
        setReload(prev => !prev);
    }
    
    return (
        <ul id='dishList'>
            {items.map((item, i) => (
                <li id='dishRow' key={i}>
                <span className='nombre'>{item.name}</span>
                <span className='precio'>{item.price}
                    {editMode && 
                        <button className='editBtn' onClick={() => editItem(item.id)}>✏️</button>
                    }
                    {editMode && 
                    <button className='deleteBtn' onClick={() => deleteItem(item.id)}>🗑️</button>
                    }
                </span>
                </li>
            ))}
        </ul>  
    )
}

export default DishList