import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../firebase/firebase';
import { CartContext } from '../CartContext';
import '../../styles/detalles.css';

export default function ProdDetails() {
    const [product, setProduct] = useState(null);
    const { prodId } = useParams();
    const [count, setCount] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [stockAvailable, setStockAvailable] = useState(0);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductById(prodId);
                setProduct(fetchedProduct);
                setStockAvailable(fetchedProduct.Stock);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [prodId]);

    const handleAddToCart = () => {
        if (product && count <= stockAvailable) {
            addToCart({ ...product, quantity: count });
            setStockAvailable(stockAvailable - count);
            setAddedToCart(true);
        }
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <section className="product-detail">
            <h1>Detalles del producto:</h1>
            <article className='Detalles-container'>
                <div className='Detalles-contenido'>
                    <h2>{product.Title}</h2>
                    <img src={product.Image} alt={product.Title} />
                    <h3>Precio: {product.Price}</h3>
                    <h4>Talles disponibles: {product.Description}</h4>
                    <h5>Stock Disponible: {stockAvailable}</h5>
                    {stockAvailable === 0 ? (
                        <p>El stock está agotado, vuelve más tarde</p>
                    ) : !addedToCart ? (
                        <>
                            <div className='quantity-control'>
                                <button className="quantity-button" onClick={() => setCount(prev => Math.max(prev - 1, 1))}>-</button>
                                <span className="quantity-display">{count}</span>
                                <button className="quantity-button" onClick={() => setCount(prev => Math.min(prev + 1, stockAvailable))}>+</button>
                            </div>
                            <button className='Comprar-button' onClick={handleAddToCart}>Añadir al Carrito</button>
                        </>
                    ) : (
                        <p>El producto fue añadido correctamente.</p>
                    )}
                </div>
            </article>
        </section>
    );
}
