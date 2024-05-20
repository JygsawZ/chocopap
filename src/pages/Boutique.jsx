import {useContext} from 'react';
import {ProductContext} from '../components/ProductContext';
import Product from '../components/Product.jsx';

const Boutique = () => {
    const {products} = useContext(ProductContext);

    return (
        <>
            <title>Boutique</title>
            <div className="bg-White content flex flex-wrap justify-center">
                {products.map(product => (
                    <div className="w-1/2" key={product.id}>
                        <Product id={product.id}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Boutique;