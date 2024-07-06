// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const calculateTotalPrice = (product) => {
        const price = parseFloat(product.Price); // Asegúrate de usar Price en lugar de price si es el nombre del campo en Firebase
        const quantity = parseInt(product.quantity);

        if (isNaN(price) || isNaN(quantity)) {
            return 0; 
        }

        return (price * quantity).toFixed(2); // Ajusta el formato del resultado según sea necesario
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find((item) => item.id === product.id);
            if (productExists) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            }
            return [...prevCart, { ...product, quantity: product.quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
