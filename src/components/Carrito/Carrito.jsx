import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import Checkout from '../Checkout'; 
import { addOrderToFirestore } from '../../firebase/firebase'; 
import '../../styles/CartDetail.css';

const Carrito = () => {
    const { cart, removeFromCart, calculateTotalPrice } = useContext(CartContext);

    const [showMessage, setShowMessage] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nombreApellido: '',
        celular: '',
        correo: '',
        verificacionCorreo: ''
    });
    const [emailError, setEmailError] = useState('');
    const [showButtons, setShowButtons] = useState(true);

    const calculateTotalPayment = () => {
        let totalPrice = 0;
        cart.forEach((product) => {
            totalPrice += parseFloat(calculateTotalPrice(product));
        });
        return totalPrice.toFixed(2);
    };

    const handleFinalizarCompra = async () => {
        if (validateForm()) {
            // Prepara los datos de la orden
            const orderData = {
                nombreApellido: formData.nombreApellido,
                celular: formData.celular,
                correo: formData.correo,
                items: cart.map(product => ({
                    id: product.id,
                    title: product.Title,
                    quantity: product.quantity,
                    price: product.Price
                })),
                totalPayment: calculateTotalPayment()
            };

            try {
                // Agrega la orden a Firestore
                const orderId = await addOrderToFirestore(orderData);
                console.log('Order ID:', orderId);

                // Muestra mensaje de éxito o redirige a otra página
                alert(`¡Compra finalizada! Tu orden ha sido registrada con el ID: ${orderId}`);
                setShowForm(false); // Opcional: cierra el formulario después de la compra
            } catch (error) {
                console.error('Error al agregar orden a Firestore:', error);
                alert('Hubo un error al finalizar la compra. Por favor, inténtalo nuevamente.');
            }
        }
    };

    const validateForm = () => {
        if (!formData.nombreApellido || !formData.celular || !formData.correo || !formData.verificacionCorreo) {
            setShowMessage(true);
            return false;
        }
        if (formData.correo !== formData.verificacionCorreo) {
            setEmailError('Los correos electrónicos no coinciden');
            return false;
        }
        return true;
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'verificacionCorreo') {
            setEmailError('');
        }
    };

    const handleClearCart = () => {
        setShowForm(false); // Opcional: cierra el formulario sin realizar la compra
    };

    return (
        <div className="Carrito">
            <h2 className="CartTitle">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className="CartProducts">No hay productos en el carrito.</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id} className="CartItem">
                            <div className="ProductImage">
                                <img src={product.Image} alt={product.Title} />
                            </div>
                            <div className="ProductDetails">
                                <h3>{product.Title}</h3>
                                <p className='DetailName'>Precio Unitario: ${product.Price}</p>
                                <p className='DetailName'>Cantidad: {product.quantity}</p>
                                <p className='DetailName'>Precio Total: ${calculateTotalPrice(product)}</p>
                                {showButtons && (
                                    <button className="CartButton" onClick={() => removeFromCart(product.id)}>
                                        Eliminar Producto
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    {showButtons && (
                        <div>
                            <p className="TotalPayment">Total a Pagar: ${calculateTotalPayment()}</p>
                            <button className="FinalizarCompraButton" onClick={() => setShowForm(true)}>
                                Finalizar Compra
                            </button>
                            <button className="ClearCartButton" onClick={handleClearCart}>
                                Limpiar Carrito
                            </button>
                        </div>
                    )}
                </div>
            )}
            {showForm && (
                <div className="CompraForm">
                    <h3>Antes de finalizar tu compra, completa los siguientes pasos:</h3>
                    <label>Nombre y Apellido:</label>
                    <input
                        type="text"
                        name="nombreApellido"
                        value={formData.nombreApellido}
                        onChange={handleInputChange}
                    />
                    <label>Número de Celular:</label>
                    <input
                        type="text"
                        name="celular"
                        value={formData.celular}
                        onChange={handleInputChange}
                    />
                    <label>e-Mail:</label>
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                    />
                    <label>Verificación de e-Mail:</label>
                    <input
                        type="email"
                        name="verificacionCorreo"
                        value={formData.verificacionCorreo}
                        onChange={handleInputChange}
                    />
                    {emailError && <p className="ErrorMessage">{emailError}</p>}
                    {showMessage && (
                        <p className="ErrorMessage">Por favor completa todos los campos.</p>
                    )}
                    <button className="SubmitButton" onClick={handleFinalizarCompra}>
                        Finalizar Compra
                    </button>
                </div>
            )}
        </div>
    );
};

export default Carrito;
