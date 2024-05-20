import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Panier = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.map(item => (
                <div key={item.product.id}>
                    <img src={item.product.image} alt={item.product.name} width="320" height="175.5" className="align"/>
                    <p>{item.product.price}</p>
                    <p>Quantité : {item.quantity}</p>
                </div>
            ))}
        </>
    );
};

export default Panier;