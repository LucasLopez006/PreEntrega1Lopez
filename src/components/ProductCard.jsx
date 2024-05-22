import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, price, image, description, stock, category }) {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <p>Precio: {price}</p>
                <h4>Talles Disponibles: {description}</h4>
                <Link to={`/product/${id}`}><button>Ver detalles</button></Link>
                <h5>Stock Disponible: {stock}</h5>
            </div>
        </div>
    );
}