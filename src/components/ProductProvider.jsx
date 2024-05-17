import {useState} from "react";
import PropTypes from 'prop-types';
import {ProductContext} from './ProductContext';
import productsData from '../data/products';

export const ProductProvider = ({children}) => {
    const [products] = useState(productsData);

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};