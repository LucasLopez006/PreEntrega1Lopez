import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock'; 
import { CartContext } from "../CartContext.jsx"; 
import "../../styles/detalles.css"; 

export default function ProdDetail() {
const [product, setProduct] = useState(null); 
const { prodId } = useParams();
const [count, setCount] = useState(1);
const { addToCart } = useContext(CartContext);

useEffect(() => {
    
    const fetchedProduct = getProduct(prodId);
    setProduct(fetchedProduct); 

}, [prodId]);

const handleAddToCart = () => {
    addToCart({ ...product, quantity: count });
};


if (!product) {
    return <div>Cargando...</div>;
}

return (
    <section className="product-detail">
    <h1>Detalles del producto:</h1>
    <article className='Detalles-container'>
        <div className='Detalles-contenido'>
        <h2>{product.title}</h2>
        <p>N° De serie: {product.id}</p>
        <img src={product.image} alt={product.title} />
        <h3>Precio: {product.price}</h3>
        <h4>Talles disponibles: {product.description}</h4>
        <h5>Stock Disponible: {product.stock}</h5>
        <div className='quantity-control'>
            <button className="quantity-button" onClick={() => setCount(prev => Math.max(prev - 1, 1))}>-</button>
            <span className="quantity-display">{count}</span>
            <button className="quantity-button" onClick={() => setCount(prev => Math.min(prev + 1, product.stock))}>+</button>
        </div>
        <button className='Comprar-button' onClick={handleAddToCart}>Añadir al Carrito</button>
        </div>
    </article>
    </section>
);
}
