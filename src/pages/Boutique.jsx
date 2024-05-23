import {useContext, useState} from 'react';
import {ProductContext} from '../components/ProductContext';
import Product from '../components/Product.jsx';
import Filter from '../components/Filter.jsx'; // Importez le composant Filter

const Boutique = () => {
    const {products, filterValues} = useContext(ProductContext);

    // Ajoutez un état pour les filtres
    const [filters, setFilters] = useState({
        availability: '',
        price: {
            from: '',
            to: '',
        },
    });

    // Ajoutez une fonction pour gérer le changement de filtre
    const handleFilterChange = (name, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <>
            <title>Boutique</title>
            <div>
                <div className="w-1/4 fixed">
                    <Filter filters={filters} onFilterChange={handleFilterChange} filterValues={filterValues} />
                </div>
                <div>
                    <div className="w-3/4 ml-1/4">
                        <div className="content flex flex-wrap justify-center">
                            {products.map(product => (
                                <div className="w-1/2" key={product.id}>
                                    <Product id={product.id}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Boutique;