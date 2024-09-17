import React from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList'

const ItemListContainer = () => {
    let productos = [
        {
            nombre: "Tumbler color blanco",
            precio: 25000,
            descripcion: "Tumbler termico 24 horas frio calor",
            id: 1,
            imagen: "src/componentes/Imagenes/TumblerHeader.png",
        },
        {
            nombre: "Termo color negro",
            precio: 25000,
            descripcion: "Tumbler termico 24 horas frio calor",
            id: 2,
            imagen: "src/componentes/Imagenes/TermoHeader.png",
        },
        {
            nombre: "Vasito color negro",
            precio: 25000,
            descripcion: "Tumbler termico 24 horas frio calor",
            id: 3,
            imagen: "src/componentes/Imagenes/VasitoHeader.png",
        },
        {
            nombre: "Botella color rosa",
            precio: 25000,
            descripcion: "Tumbler termico 24 horas frio calor",
            id: 4,
            imagen: "src/componentes/Imagenes/BotellitaHeader.png",
        },
    ]


    return (
    <div className='ItemListCointainer'> 
        <ItemList productos ={productos}/>
    </div>
    )
}

export default ItemListContainer