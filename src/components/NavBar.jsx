import { useState } from 'react'
import '/src/styles/navbar.css'

const NavBar = () => {
    return(
        <>
    
    <header>
    <img src="/src/assets/RushLogos.png" alt="Logo de La empresa" class='imgheader'/>
    <h1>Inicio</h1>
    <div class="container">
        <form class="search-box">
            <input type="text" placeholder='Encuentra lo que buscas.'/>
            <button type='submit'><img src="/src/assets/search.png" alt="Boton de busqueda" /></button>
        </form>
    </div>  
    <nav>
        <ul>
            <li><a href="">Categorias</a></li>
            <li><a href="pages/ofertas.html">Ofertas</a></li>
        </ul>
    </nav>
    <div class='carrito'>
        <img src="/src/assets/cart.svg" alt="Carrito de compras" />
        <p>Tu Carrito</p>
    </div>
    <div class='usuario'>
        <img src="/src/assets/user.svg" alt="User logo" />
        <p>Bienvenido, Usuario</p>
    </div>
    </header>

    </>
    )
}

export default NavBar