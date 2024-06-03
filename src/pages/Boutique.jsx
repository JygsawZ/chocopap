import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const Boutique = () => {
    const [categoryFilter, setCategoryFilter] = useState({});
    const [priceFilter, setPriceFilter] = useState([0, Infinity]);
    const [noteFilter, setNoteFilter] = useState([0, 5]);

    const handleCategoryChange = (event) => {
        const value = event.target.checked;
        const name = event.target.value;

        setCategoryFilter(prevState => ({ ...prevState, [name]: value }));
    };

    const handlePriceChange = (event) => {
        const { min, max } = event.target.value;
        setPriceFilter([min, max]);
    };

    const handleNoteChange = (event) => {
        const { min, max } = event.target.value;
        setNoteFilter([min, max]);
    };

    const displayedProducts = products.filter(product => {
        const categoryKeys = Object.keys(categoryFilter);
        return categoryKeys.every(key => product.category[key] === categoryFilter[key]) &&
            product.price >= priceFilter[0] && product.price <= priceFilter[1] &&
            product.note >= noteFilter[0] && product.note <= noteFilter[1];
    });


    return (
        <>
            <title>Boutique</title>
            <div>
                <div id="filter" className="border-2 border-b-black p-5 bg-White">
                    <div id="category" className="text-xl">
                        Catégories
                        <div>
                            <label>
                                <input type="checkbox" value="blanc" onChange={handleCategoryChange}/>
                                Blanc
                            </label>
                            <label>
                                <input type="checkbox" value="lait" onChange={handleCategoryChange}/>
                                Lait
                            </label>
                            <label>
                                <input type="checkbox" value="noir" onChange={handleCategoryChange}/>
                                Noir
                            </label>
                            <label>
                                <input type="checkbox" value="caramel" onChange={handleCategoryChange}/>
                                Caramel
                            </label>
                            <label>
                                <input type="checkbox" value="noix" onChange={handleCategoryChange}/>
                                Noix
                            </label>
                            <label>
                                <input type="checkbox" value="fruit" onChange={handleCategoryChange}/>
                                Fruit
                            </label>
                            <label>
                                <input type="checkbox" value="liqueur" onChange={handleCategoryChange}/>
                                Liqueur
                            </label>
                        </div>
                    </div>
                    <div className="text-black text-xl">Prix</div>
                    <div className="mt-2 mb-2">
                        <div>
                            <div>
                                <span className="text-black">Prix min</span>
                                <input type="number" id="prix-min"/>
                            </div>
                            <div>
                                <span className="text-black">Prix max</span>
                                <input type="number" id="prix-max"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-black text-xl">Notes</div>
                    <div className="mt-2 mb-2">
                        <div>
                            <div>
                                <span className="text-black">Note min</span>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div>
                                <span className="text-black">Note max</span>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {displayedProducts.map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Boutique;