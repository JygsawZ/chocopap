import {useState} from "react";
import PropTypes from 'prop-types';
import {ProductContext} from './ProductContext';
import productsData from '../data/products';

export const ProductProvider = ({children}) => {
    const [products] = useState(productsData);

    const getUniqueFilterValues = (products) => {
        const availabilityValues = [...new Set(products.map(product => product.filter.category))];
        const priceValues = {
            from: Math.min(...products.map(product => product.filter.price.from)),
            to: Math.max(...products.map(product => product.filter.price.to)),
        };

        return { category: availabilityValues, price: priceValues };
    };

    const [filterValues, setFilterValues] = useState(getUniqueFilterValues(products));

    const resetFilters = () => {
        setFilterValues(getUniqueFilterValues(products));
    };

    return (
        <ProductContext.Provider value={{products, filterValues, resetFilters}}>
            {children}
        </ProductContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};