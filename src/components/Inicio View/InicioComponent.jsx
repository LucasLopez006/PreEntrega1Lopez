import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ProductCard from '../ProductCard';
import '/src/styles/index.css';

export default function ProductsComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <>
            <section>
                <h2 className='articulos-title'>Productos a la venta:</h2>
                <article className='card-container'>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            stock={product.stock}
                            category={product.category}
                        />
                    ))}
                </article>
            </section>
        </>
    );
}