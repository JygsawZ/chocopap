import { useContext } from 'react';
import { ProductContext } from '../components/ProductContext';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const product = products.find(product => product.id === Number(id));

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="flex-col text-left ">
            <img src={product.image} alt={product.name} className="align scale-50"/>
            <h2>{product.name}</h2>
            <p>{product.rating}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.ingredients.join(', ')}</p>
        </div>
    );
};