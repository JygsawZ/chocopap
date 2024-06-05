import {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import PropTypes from "prop-types";


const ProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 m-4">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="rounded-lg" />
            </Link>
            <h2 className="text-2xl text-black">{product.title}</h2>
            <p className="mt-1 text-lg font-medium text-black">Note :  {product.note}</p>
            <p className="mt-1 text-lg font-medium text-black">Prix : {product.price}€</p>
            <input className="m-auto" type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            <form className="mt-4">
                <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 "
                    onClick={() => addToCart(product, quantity)}>
                    Ajouter au panier
                </button>
            </form>
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

