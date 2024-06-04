import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = React.createContext(undefined);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.product.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
    };

    const total = calculateTotal();

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};