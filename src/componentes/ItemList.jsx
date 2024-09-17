import React from 'react'
import "./ItemList.css"

const ItemList = ({productos }) => {

    

    return (
    <div className="ItemList">
        {productos.map((producto) => (
        <div key={producto.id} className="Items">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button>
            Agregar al carrito
            </button>
        </div>
        ))}
    </div>
    )
}

export default ItemList