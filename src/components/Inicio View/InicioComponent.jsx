import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ProductCard from '../ProductCard';
import '/src/styles/index.css'

export default function ProductsComponent(){
    const [products, setProducts]=useState( [] );
    
    
    useEffect(() => {
        getProducts().then(data => setProducts(data));
    },[])
        
        return(<>
        <section>
            <h2 className='articulos-title'>Prodcutos a la venta:</h2>
            <article>
                {products.map(product => (
                <ProductCard
                title={product.title} 
                price={product.price} 
                image={product.image}/>))}
            </article>
        </section>
        
    </>
    )
}


