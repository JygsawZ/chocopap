import {useState} from "react";
import PropTypes from "prop-types";


const ProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex-col bg-white rounded-lg shadow-lg p-4 m-4">
            <img src={product.image} alt={product.title} className="rounded-lg" />
            <h2 className="text-2xl text-black">{product.title}</h2>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Note: {product.note}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Prix {product.price}€</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">{product.description}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Ingrédients: {product.ingredients}</p>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Ajouter au panier')}>
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
        category: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.object]),
        description: PropTypes.string,
        ingredients: PropTypes.string,
    }).isRequired,
};
export default ProductCard;

