import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '../../firebase/firebase';
import ProductCard from '../ProductCard';
import '/src/styles/index.css';

export default function RopaComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsByCategory("Remeras de Fútbol");
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <section>
                <h2 className='articulos-title'>Remeras de Fútbol:</h2>
                <article className='card-container'>
                    {products.map(product => (
                        <ProductCard
                            key={product.id} 
                            id={product.id}
                            title={product.Title}
                            price={product.Price}
                            description={product.Description}
                            image={product.Image}
                            stock={product.Stock}
                            category={product.Category}
                        />
                    ))}
                </article>
            </section>
        </>
    );
}

