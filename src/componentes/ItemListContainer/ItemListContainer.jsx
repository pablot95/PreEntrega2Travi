import React from 'react'
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategorias } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams ()

    useEffect (() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        
    }, [idCategoria])


    return (
    <div className='ItemListCointainer'> 
        <ItemList productos ={productos}/>
    </div>
    )
}

export default ItemListContainer