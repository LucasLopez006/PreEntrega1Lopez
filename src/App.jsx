import { useState } from 'react'
import NavBar from './components/Navigation/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Main from './main.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InicioComponent from './components/Inicio View/InicioComponent.jsx'
import ProductsComponent from './components/Ropa Fútbol/RopaComponent.jsx'
import RopaDeportiva from './components/Ropa Deportiva/RopaDeportiva.jsx'
import ProdDetail from './components/ProductView/ProdDetails.jsx'

function App(){ 

  return (
    
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<InicioComponent/>}/>
          <Route exact path="/Ropa_de_Futbol" element={<ProductsComponent/>}/>
          <Route exact path="/Ropa_Deportiva" element={<RopaDeportiva/>}/>
          <Route exact path='/product/:prodId' element={<ProdDetail/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App