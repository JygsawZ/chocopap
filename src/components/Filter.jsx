const Filter = ({ filters, onFilterChange }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    return (
        <div className="space-y-2">
            {/* ... */}
            <input
                type="checkbox"
                id="FilterInStock"
                className="size-5 rounded border-gray-300"
                checked={filters.availability === 'inStock'}
                onChange={() => handleInputChange({ name: 'availability', value: 'inStock' })}
            />
            {/* ... */}
            <input
                type="number"
                id="FilterPriceFrom"
                placeholder="From"
                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                value={filters.price.from}
                onChange={event => handleInputChange({ name: 'price.from', value: event.target.value })}
            />
            {/* ... */}
        </div>
    );
};