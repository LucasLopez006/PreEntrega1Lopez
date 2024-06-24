import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import '../../styles/CartDetail.css';

const Carrito = () => {
    const { cart, removeFromCart, calculateTotalPrice } = useContext(CartContext);
    const [showMessage, setShowMessage] = useState(false);
    const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario
    const [formData, setFormData] = useState({
        nombreApellido: '',
        celular: '',
        correo: '',
        verificacionCorreo: ''
    });
    const [emailError, setEmailError] = useState('');
    const [showButtons, setShowButtons] = useState(true); // Estado para controlar la visibilidad de los botones

    const calculateTotalPayment = () => {
        let totalPrice = 0;
        cart.forEach((product) => {
            totalPrice += calculateTotalPrice(product);
        });
        return totalPrice.toFixed(2); 
    };

    const handleFinalizarCompra = () => {
        if (validateForm()) {
            console.log("Compra finalizada");
            setShowButtons(false); // Oculta los botones al finalizar la compra
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

    // Función para limpiar el carrito y reiniciar el estado del formulario
    const handleClearCart = () => {
        // Limpiar carrito
        // ...

        // Reiniciar el estado del formulario
        setShowForm(false);
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
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="ProductDetails">
                                <h3>{product.title}</h3>
                                <p className='DetailName'>Precio Unitario: ${product.price}</p>
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
