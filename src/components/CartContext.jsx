import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Charger le panier depuis le LocalStorage au démarrage
    useEffect(() => {
        const localCart = window.localStorage.getItem('cart');
        if (localCart) {
            setCart(JSON.parse(localCart));
        }
    }, []);

    const addToCart = (product, quantity) => {
        const newCart = [...cart];
        const itemInCart = newCart.find((item) => item.product.id === product.id);

        if (itemInCart) {
            itemInCart.quantity += quantity;
        } else {
            newCart.push({ product, quantity });
        }

        setCart(newCart);
        // Sauvegarder le panier dans le LocalStorage chaque fois qu'il change
        window.localStorage.setItem('cart', JSON.stringify(newCart));
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