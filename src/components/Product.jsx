import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ProductContext} from './ProductContext';
import { CartContext } from './CartContext';
import PropTypes from "prop-types";



const Product = ({id}) => {
    const {products} = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const product = products.find(product => product.id === id);

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="flex flex-col items-center text-center ">
            <Link to={`/produits/${product.id}`}>
                <img src={product.image} alt={product.name} width="320" height="175.5" className="align"/>
                <h2>{product.name}</h2>
                <p>{product.rating}</p>
                <p>{product.price}</p>
            </Link>
            <button onClick={() => addToCart(product, 1)}>Ajouter au panier</button>
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Product;