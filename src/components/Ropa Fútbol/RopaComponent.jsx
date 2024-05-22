import React, { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ProductCard from '../ProductCard';
import '/src/styles/index.css';

export default function RopaComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            const filteredProducts = data.filter(product => product.category === "Remeras de Fútbol");
            setProducts(filteredProducts);
        });
    }, []);

    return (
        <section>
            <h2 className='articulos-title'>Remeras de Fútbol:</h2>
            <article className='card-container'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        stock={product.stock}
                    />
                ))}
            </article>
        </section>
    );
}