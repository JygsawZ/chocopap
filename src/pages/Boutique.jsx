import {useContext, useState} from 'react';
import {ProductContext} from '../components/ProductContext';
import Product from '../components/Product.jsx';
import Filter from '../components/Filter.jsx'; // Importez le composant Filter

const Boutique = () => {
    const {products, filterValues} = useContext(ProductContext);

    const [filters, setFilters] = useState({
        category: [],
        price: {
            from: '',
            to: '',
        },
    });

    const handleFilterChange = (name, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filterProducts = (products) => {
        let filteredProducts = [...products];

        // Filtre par catégorie
        if (filters.category.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                filters.category.includes(product.category)
            );
        }

        // Filtre par prix
        if (filters.price.from) {
            filteredProducts = filteredProducts.filter(product =>
                product.price >= filters.price.from
            );
        }

        if (filters.price.to) {
            filteredProducts = filteredProducts.filter(product =>
                product.price <= filters.price.to
            );
        }

        return filteredProducts;
    };

    const displayedProducts = filterProducts(products);

    return (
        <>
            <title>Boutique</title>
            <div>
                <div>
                    <Filter filters={filters} onFilterChange={handleFilterChange} filterValues={filterValues} />
                </div>
                <div>
                    <div>
                        <div>
                            {displayedProducts.map(product => (
                                <div key={product.id}>
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