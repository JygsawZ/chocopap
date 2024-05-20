import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ProductContext} from './ProductContext';
import {CartContext} from './CartContext';
import PropTypes from "prop-types";

const Product = ({id}) => {
    const {products} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);
    const product = products.find(product => product.id === id);

    if (!product) {
        return <div>Produit non trouvé</div>;
    }


    return (
        <div>
            <div
                className="max-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Link to={`/produits/${product.id}`}>
                    <div className>
                        <img src={product.image} alt={product.name} className="rounded-t-lg "/>
                    </div>
                    <div className="p-4 rounded-b-lg">
                        <div className="flex mb-5">
                            <h2 className="text-2xl text-black">{product.name}</h2>
                        </div>
                        <p className="mt-1 ml-auto text-lg font-medium text-black">{product.price}€</p>
                        <p className="mt-1 ml-auto text-lg font-medium text-black">Note: {product.rating}</p>
                        <a
                            className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-Yell"
                            onClick={() => addToCart(product, 1)}
                        >
                    <span
                        className="absolute inset-0 translate-x-0 translate-y-0 bg-Yell transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    ></span>
                            <span
                                className="relative block border border-current px-8 py-3">Ajouter au panier</span>
                        </a>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Product;