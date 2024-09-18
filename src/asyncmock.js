const productos = [
    {
        nombre: "Tumbler color blanco",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: 1,
        imagen: "../Imagenes/TumblerHeader.png",
        idCat: "tumbler",
        stock: 10
    },
    {
        nombre: "Termo color negro",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: 2,
        imagen: "../Imagenes/TermoHeader.png",
        idCat: "termo",
        stock: 10
    },
    {
        nombre: "Vasito color negro",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: 3,
        imagen: "../Imagenes/VasitoHeader.png",
        idCat: "vasito",
        stock: 10
    },
    {
        nombre: "Botella color rosa",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: 4,
        imagen: "../Imagenes/BotellitaHeader.png",
        idCat: "botella",
        stock: 10
    },
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id)
            resolve(producto)
        }, 200)
    })
}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = productos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}