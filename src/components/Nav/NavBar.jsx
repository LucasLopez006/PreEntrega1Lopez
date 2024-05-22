import { useState } from 'react'
import '/src/styles/navbar.css'
import CartWidget from '../CartWidget.jsx'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <>
    
    <header>
    <Link to ={'/'}><img src="/src/assets/RushLogos.png" alt="Logo de La empresa" className='imgheader'/></Link>
    <div className="container">
        <form className="search-box">
            <input type="text" placeholder='Encuentra lo que buscas.'/>
            <button type='submit'><img src="/src/assets/search.png" alt="Boton de busqueda" /></button>
        </form>
    </div>  
    <nav>
        <ul>
            <li><Link to ={'/Ropa_de_Futbol'}>Ropa de Fútbol</Link></li>
            <li><Link to ={'/Ropa_Deportiva'}>Ropa deportiva</Link></li>
        </ul>
    </nav>
    <div className='carrito'>
        <CartWidget/>
        <p>Tu Carrito</p>
    </div>
    <div className='usuario'>
        <img src="/src/assets/user.svg" alt="User logo" />
        <p>Bienvenido, Usuario</p>
    </div>
    </header>

    </>
    )
}

export default NavBar