import {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import PropTypes from "prop-types";


const ProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    return (
        <div className="flex-col bg-white rounded-lg shadow-lg p-4 m-4">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="rounded-lg" />
            </Link>
            <h2 className="text-2xl text-black">{product.title}</h2>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Note: {product.note}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Prix {product.price}€</p>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addToCart(product, quantity)}>
                Ajouter au panier
            </button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        note: PropTypes.number,
        description: PropTypes.string,
        ingredients: PropTypes.string,
        category: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.object]),
    }).isRequired,
};
export default ProductCard;

