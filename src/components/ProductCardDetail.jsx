import {useState, useContext} from "react";
import { Link } from 'react-router-dom';
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
            <Link to={`/product/${foundProduct.id}`}>
                <img src={foundProduct.image} alt={foundProduct.title} className="rounded-lg"/>
            </Link>
            <h2 className="text-2xl text-black">{foundProduct.title}</h2>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Note: {foundProduct.note}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Prix {foundProduct.price}€</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">{foundProduct.description}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Ingrédients : {foundProduct.ingredients}</p>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
            <form className="mt-4">
                <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 "
                        onClick={() => addToCart(foundProduct, quantity)}>
                    Ajouter au panier
                </button>
            </form>
        </div>
    );
};


export default ProductCardDetail;

