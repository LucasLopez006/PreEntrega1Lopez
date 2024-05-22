import React from 'react';

export default function ProductsCard({ title, price, image }) {
    return (
        <div className="card">
                <div className="card-content">
                    <h2>{title}</h2>
                    <img src={image} alt={title} />
                    <p>Price: ${price}</p>
                    <button>Ver detalles</button>
                </div>
            </div>
    );
}