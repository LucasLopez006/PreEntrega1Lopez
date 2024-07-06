// checkout.jsx

import React, { useState } from 'react';
import { addOrderToFirestore } from '../firebase/firebase';

function Checkout() {
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [items, setItems] = useState('');
const [quantity, setQuantity] = useState('');
const [totalPrice, setTotalPrice] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const orderData = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        items: items,
        quantity: quantity,
        totalPrice: totalPrice
        // Puedes agregar más campos según los datos que necesites capturar
    };

    const orderId = await addOrderToFirestore(orderData);
    alert(`¡Orden creada con éxito! ID de orden: ${orderId}`);
      // Aquí podrías redirigir al usuario a una página de confirmación o realizar otra acción después de crear la orden
    } catch (error) {
    console.error('Error al crear la orden:', error);
    alert('Hubo un error al crear la orden. Inténtalo nuevamente.');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <label>
        Nombre completo:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
    </label>
    <br />
    <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </label>
    <br />
    <label>
        Número de teléfono:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
    </label>
    <br />
    <label>
        Items comprados:
        <textarea value={items} onChange={(e) => setItems(e.target.value)} required />
    </label>
    <br />
    <label>
        Cantidad:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
    </label>
    <br />
    <label>
        Precio total:
        <input type="number" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} required />
    </label>
    <br />
    <button type="submit">Finalizar Compra</button>
    </form>
);
}

export default Checkout;
