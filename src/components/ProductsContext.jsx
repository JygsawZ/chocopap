import { createContext } from 'react';
import products from '../data/products.json';
import PropTypes from 'prop-types';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};


ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};