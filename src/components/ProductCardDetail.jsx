import {useState, useContext} from "react";
import { CartContext } from './CartContext';
import products from '../data/products.json';
import {useParams} from "react-router-dom";


const ProductCardDetail = () => {
    const { id } = useParams();
    const foundProduct = products.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    if (!foundProduct) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="flex-col bg-white rounded-lg shadow-lg p-4 m-4">
            <img src={foundProduct.image} alt={foundProduct.title} className="rounded-lg" />
            <h2 className="text-2xl text-black">{foundProduct.title}</h2>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Note: {foundProduct.note}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Prix {foundProduct.price}€</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">{foundProduct.description}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Ingrédients : {foundProduct.ingredients}</p>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addToCart(foundProduct, quantity)}>
                Ajouter au panier
            </button>
        </div>
    );
};


export default ProductCardDetail;

