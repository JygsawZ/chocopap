import {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from './CartContext';
import {ProductsContext} from './ProductsContext';
import PropTypes from 'prop-types';

const ProductCardItem = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    return (
        <div key={product.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 m-4">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="rounded-lg"/>
            </Link>
            <h2 className="text-2xl text-black">{product.title}</h2>
            <p className="mt-1 text-lg font-medium text-black">Note : {product.note}</p>
            <p className="mt-1 text-lg font-medium text-black">Prix : {product.price}€</p>
            <div>
                <label htmlFor="Quantity" className="sr-only">Quantity</label>
                <div className="flex items-center gap-1">
                    <button type="button"
                            className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                            onClick={() => {
                                if (quantity > 1) setQuantity(quantity - 1)
                            }}>
                        -
                    </button>
                    <input type="number" id="Quantity" value={quantity}
                           onChange={e => setQuantity(Number(e.target.value))}
                           className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"/>
                    <button type="button"
                            className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                            onClick={() => setQuantity(quantity + 1)}>
                        +
                    </button>
                </div>
            </div>
            <form className="mt-4">
                <button
                    type="button"
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 "
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, quantity);
                    }}>
                    Ajouter au panier
                </button>
            </form>
        </div>
    );
};

const ProductCard = () => {
    const products = useContext(ProductsContext);

    return products.map(product => <ProductCardItem key={product.id} product={product}/>);
};

ProductCardItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        note: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;