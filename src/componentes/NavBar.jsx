import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"

const NavBar = () => {
    

    return (
    <header>
        <h1><a href="#"><img src="src/componentes/Imagenes/TianaLogo.png" alt="" /></a></h1>
        <nav>
            <ul>
                <li>Tumblers</li>
                <li>Termos</li>
                <li>Vasitos</li>
                <li>Botellas</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar