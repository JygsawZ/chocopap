import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import PropTypes from "prop-types";

const Product = ({ id }) => {
    const { products } = useContext(ProductContext);
    const product = products.find(product => product.id === id);

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div>
            <img src={product.image} alt={product.name} className="scale-50"/>
            <h2>{product.name}</h2>
            <p>{product.rating}</p>
            <p>{product.price}</p>
            {/* Reste de votre code pour afficher le produit */}
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Product;