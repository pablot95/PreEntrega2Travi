import React from 'react'
import "./ItemDetail.css"


const ItemDetail = ({id, nombre, precio, imagen}) => {


  return (
    <div className='contenedorItem'>
        <img src={imagen} alt={nombre} />
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>


    </div>
  )
}

export default ItemDetail