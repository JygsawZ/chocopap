import { useParams } from 'react-router-dom';
import products from '../data/products.json';

export const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === Number(id));

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="flex-row">
            <img src={product.image} alt={product.name} className="m-4 rounded-lg" />
            <h2 className="text-2xl text-black">{product.name}</h2>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Note: {product.note}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Prix {product.price}€</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">{product.description}</p>
            <p className="mt-1 ml-auto text-lg font-medium text-black">Ingrédients: {product.ingredients.join(', ')}</p>
        </div>
    );
};