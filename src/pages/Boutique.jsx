import {useState} from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import {ProductsContext} from '../components/ProductsContext';

const Boutique = () => {
    const maxPrice = Math.max(...products.map(product => product.price));
    const [categoryFilter, setCategoryFilter] = useState({});
    const [priceFilter, setPriceFilter] = useState([0, maxPrice]);
    const [noteFilter, setNoteFilter] = useState([0, 5]);

    const handleCategoryChange = (event) => {
        const value = event.target.checked;
        const name = event.target.value;

        setCategoryFilter(prevState => ({...prevState, [name]: value}));
    };

    const handlePriceChange = (event) => {
        const {name, value} = event.target;
        setPriceFilter(prevState => {
            if (name === 'min') {
                return [Number(value) || 0, prevState[1]];
            } else if (name === 'max') {
                return [prevState[0], Number(value) || maxPrice];
            } else {
                return prevState;
            }
        });
    };

    const handleNoteChange = (event) => {
        const {name, value} = event.target;
        setNoteFilter(prevState => {
            if (name === 'min') {
                return [Number(value), prevState[1]];
            } else if (name === 'max') {
                return [prevState[0], Number(value)];
            } else {
                return prevState;
            }
        });
    };

    const displayedProducts = products.filter(product => {
        const categoryKeys = Object.keys(categoryFilter).filter(key => categoryFilter[key]);
        return categoryKeys.every(key => product.category[key]) &&
            product.price >= priceFilter[0] && product.price <= priceFilter[1] &&
            product.note >= noteFilter[0] && product.note <= noteFilter[1];
    });

    return (
        < >
            <title>Boutique</title>
            <div>
                <div id="filter" className="flex flex-col border-2 border-b-black p-5 bg-White m-4">
                    <div id="category" className="text-black text-xl my-2">
                        <span className="flex items-center">
                            <span className="pr-6">Catégories</span>
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className="space-y-2">
                            <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="blanc" className="size-4 rounded border-gray-300"
                                           id="Option1" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Blanc </strong>
                                </div>
                            </label>
                            <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="lait" className="size-4 rounded border-gray-300"
                                           id="Option2" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Lait </strong>
                                </div>
                            </label>
                            <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="noir" className="size-4 rounded border-gray-300"
                                           id="Option3" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Noir </strong>
                                </div>
                            </label>
                            <label htmlFor="Option4" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="caramel" className="size-4 rounded border-gray-300"
                                           id="Option4" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Caramel </strong>
                                </div>
                            </label>
                            <label htmlFor="Option5" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="noix" className="size-4 rounded border-gray-300"
                                           id="Option5" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Noix </strong>
                                </div>
                            </label>
                            <label htmlFor="Option6" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="fruit" className="size-4 rounded border-gray-300"
                                           id="Option6" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Fruits </strong>
                                </div>
                            </label>
                            <label htmlFor="Option7" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" value="liqueur" className="size-4 rounded border-gray-300"
                                           id="Option7" onChange={handleCategoryChange}/>
                                </div>
                                <div>
                                    <strong className="font-medium text-gray-900"> Liqueur </strong>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="text-black text-xl my-2">
                        <span className="flex items-center">
                            <span className="pr-6">Prix</span>
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                    </div>
                    <div className="mt-2 mb-2">
                        <div>
                            <div>
                                <span className="text-black">Prix min</span>
                                <input type="number" name="min" value={priceFilter[0]} onChange={handlePriceChange}/>
                            </div>
                            <div>
                                <span className="text-black">Prix max</span>
                                <input type="number" name="max" value={priceFilter[1]} onChange={handlePriceChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="text-black text-xl my-2">
                        <span className="flex items-center">
                            <span className="pr-6">Notes</span>
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                    </div>
                    <div className="mt-2 mb-2">
                        <div>
                            <div>
                                <span className="text-black">Note min</span>
                                <select name="min" onChange={handleNoteChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div>
                                <span className="text-black">Note max</span>
                                <select name="max" onChange={handleNoteChange}>
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
                <ProductsContext.Provider value={displayedProducts}>
                    <div>
                        <div className="flex flex-col">
                            {displayedProducts.map(product => (
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </div>
                </ProductsContext.Provider>
            </div>
        </>
    );
}
export default Boutique;