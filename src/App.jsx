import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu.jsx'



function App() {
    // const productos = [
    // {
    //   categoria: "Coffee",
    //   imagenCategoria: "./coffee.jpg",
    //   items: [
    //     { nombreProducto: "French Vanilla", precio: 3.00 },
    //     { nombreProducto: "Caramel Macchiato", precio: 3.75 },
    //     { nombreProducto: "Pumpkin Spice", precio: 3.50 },
    //     { nombreProducto: "Hazelnut", precio: 4.00 },
    //     { nombreProducto: "Mocha", precio: 4.50 }
    //   ]
    // },
    // {
    //   categoria: "Desserts",
    //   imagenCategoria: "./pie.jpg",
    //   items: [
    //     { nombreProducto: "Donut", precio: 1.50 },
    //     { nombreProducto: "Cherry Pie", precio: 2.75 },
    //     { nombreProducto: "Cheesecake", precio: 3.00 },
    //     { nombreProducto: "Cinnamon Roll", precio: 2.50 }
    //   ]
    // }
    // ]

    return (
        <div id='mainPanel'>
            <Menu />
        </div>
    )
}

export default App
