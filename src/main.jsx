import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const Main = () => {
  return(
      <>
  
    <main>

      <div>

        <img src="src/assets/Ropas/buzo termico.jpg" alt="Buzo termico" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/conjunto inter miami.jpg" alt="Conjunto Inter miami" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/conjunto minecraft.jpg" alt="Conjunto Minecraft" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/conjunto peñarol.jpg" alt="Conjunto Peñarol" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/conjunto topper.jpg" alt="Conjunto topper" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/medias adidas.jpg" alt="Medias adidas" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/short entrenamiento.jpg" alt="Short Entrenamiento" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>
      
      <div>

        <img src="src/assets/Ropas/tobillera deportiva.jpg" alt="Tobillera deportiva" class='carrousel' />
        <p>Texto de prueba 1</p>

      </div>

    </main>

  </>
  )
}

export default Main