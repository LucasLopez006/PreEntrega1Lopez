import { useState } from 'react'
import '/src/styles/index.css'
import './buttoncomponents/ButtonComponent.jsx'
import ButtonComponent from './buttoncomponents/ButtonComponent.jsx'

const ItemListContainer = () => {
    return(
        <>
    
    <main>
        <h2 className='articulos-title'>Todos nuestros artículos:</h2>
            <div  class='card' >
        <div class="card-content">
            <img src="src/assets/Ropas/buzo termico.jpg" alt="Buzo termico" />
            <h2>Remera Térmica</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/conjunto inter miami.jpg" alt="Conjunto Inter miami"/>
            <h2>Conjunto Inter Miami</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/Camiseta_Barcelona.jpg" alt="Conjunto Minecraft"/>
            <h2>Conjunto Barcelona</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/conjunto peñarol.jpg" alt="Conjunto Peñarol"/>
            <h2>Conjunto Peñarol</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/conjunto topper.jpg" alt="Conjunto topper"/>
            <h2>Conjunto Topper</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/medias adidas.jpg" alt="Medias adidas"/>
            <h2>Medias Adidas</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/tobillera deportiva.jpg" alt="Tobillera deportiva"/>
            <h2>Tobillera deportiva</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/camiseta_river.png" alt="Short Entrenamiento"/>
            <h2>Remera River Plate</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/camiseta_boca.png" alt="" />
            <h2>Remera Boca Juniors</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/conjunto liverpool.jpg" alt="" />
            <h2>Conjunto Liverpool</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/conjunto madrid.jpg" alt="" />
            <h2>Conjunto Real Madrid</h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        <div class="card-content">
            <img src="src/assets/Ropas/conjunto united.jpg" alt="" />
            <h2>Remera Retro del Manchester United </h2>
            <p>Talles: XL, L, M, S, XS</p>
        </div>
        </div>
    </main>

    </>
    )
}

export default ItemListContainer