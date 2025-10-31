import './DishList.css'

const DishList = ({items, onEditItem, editMode, categoria, onDeleteItem}) => {
    return (
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
    )
}

export default DishList