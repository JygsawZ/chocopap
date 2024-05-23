import PropTypes from 'prop-types';
import {ProductContext} from "./ProductContext.jsx";
import {useContext} from "react";

const Filter = ({filters, onFilterChange}) => {
    const {filterValues, resetFilters} = useContext(ProductContext);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        onFilterChange(name, value);
    };



    return (
        <div className="space-y-2">
            <details
                className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                >
                    <span className="text-sm font-medium"> Catégories </span>

                    <span className="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> 0 Selected </span>

                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                            Reset
                        </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                        {filterValues.category && Array.from(new Set(filterValues.category)).map((value, index) => (
                            <li key={index}>
                                <label htmlFor={`Filter${value}`} className="inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`Filter${value}`}
                                        className="size-5 rounded border-gray-300"
                                        checked={filters.category.includes(value)}
                                        onChange={() => handleInputChange({
                                            target: {
                                                name: 'category',
                                                value
                                            }
                                        })}
                                    />

                                    <span className="text-sm font-medium text-gray-700"> {value} </span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </details>

            <details
                className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                >
                    <span className="text-sm font-medium"> Prix </span>

                    <span className="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> The highest price is 50€ </span>

                        <button type="button" onClick={resetFilters} className="text-sm text-gray-900 underline underline-offset-4">
                            Reset
                        </button>
                    </header>

                    <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">€</span>

                                <input
                                    type="number"
                                    id="FilterPriceFrom"
                                    placeholder="From"
                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={filters.price.from}
                                    onChange={handleInputChange} // Pass the event directly to handleInputChange
                                />
                            </label>

                            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">€</span>

                                <input
                                    type="number"
                                    id="FilterPriceTo"
                                    placeholder="To"
                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={filters.price.to}
                                    onChange={handleInputChange} // Pass the event directly to handleInputChange
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

Filter.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.array,
        price: PropTypes.shape({
            from: PropTypes.string,
            to: PropTypes.string,
        }),
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};
export default Filter;