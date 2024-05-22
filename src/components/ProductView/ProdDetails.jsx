import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import "../../styles/detalles.css"

export default function ProdDetail() {
    const [products, setProducts] = useState({});
    const { prodId } = useParams();
    const [count, setcount] = useState(0);

    useEffect(() => {
        setProducts(getProduct(prodId));
    }, []);

    return (
        <section className="product-detail">
            <h1>Detalles del producto:</h1>
            <article className='Detalles-container'>
                <div className='Detalles-contenido'>
                    <h2>{products.title}</h2>
                    <p>N° De serie: {products.id}</p>
                    <img src={products.image} alt={products.title} />
                    <h3>Precio: {products.price}</h3>
                    <h4>Talles disponibles: {products.description}</h4>
                    <button className='Comprar-button'>Comprar</button>
                    <h5>Stock Disponible: {products.stock}</h5>
                </div>
            </article>
        </section>
    );
}
