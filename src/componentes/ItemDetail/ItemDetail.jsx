import React from 'react'
import "./ItemDetail.css"


const ItemDetail = ({id, nombre, precio, imagen}) => {


  return (
    <div className='contenedorItem'>
        <img src={imagen} alt={nombre} />
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>ID: {id} </p>
        <p>No logro hacer que se vea cada producto segun el id</p>


    </div>
  )
}

export default ItemDetail