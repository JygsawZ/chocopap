import {useContext} from "react";
import {CartContext} from './CartContext';
import {useParams} from "react-router-dom";
import {ProductsContext} from "./ProductsContext.jsx";


const ProductCardDetail = () => {
    const {addToCart} = useContext(CartContext);
    const {id} = useParams();
    const products = useContext(ProductsContext);
    const productDetail = products.find(p => p.id === id);

    return (
        <div key={productDetail.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 m-4">
            <img src={productDetail.image} alt={productDetail.title} className="rounded-lg"/>
            <h2 className="text-2xl text-black">{productDetail.title}</h2>
            <p className="mt-1 text-lg font-medium text-black">Note : {productDetail.note}</p>
            <p className="mt-1 text-lg font-medium text-black">Prix : {productDetail.price}€</p>
            <p className="mt-1 text-lg font-medium text-black">Description : {productDetail.description}</p>
            <p className="mt-1 text-lg font-medium text-black">Ingrédients : {productDetail.ingredients}</p>
            <button
                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 "
                onClick={() => addToCart(productDetail, 1)}>
                Ajouter au panier
            </button>
        </div>
    );
};

export default ProductCardDetail;