import React from 'react'
import "./ItemDetail.css"


const ItemDetail = ({id, nombre, precio, imagen, descripcion, stock}) => {


  return (
    <div className='contenedorItem'>
        <img src={imagen} alt={nombre} />
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>ID: {id} </p>
        <p>{descripcion}</p>
        <p>stock: {stock}</p>


    </div>
  )
}

export default ItemDetail