import {useContext} from 'react';
import {ProductContext} from '../components/ProductContext';
import Product from '../components/Product.jsx';

const Boutique = () => {
    const {products} = useContext(ProductContext);

    return (
        <>
            <title>Boutique</title>
            <div className="content flex flex-wrap justify-center">
                {products.map(product => <Product key={product.id} id={product.id}/>)}
            </div>
        </>
    );
};

export default Boutique;