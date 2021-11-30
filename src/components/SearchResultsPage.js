import React from 'react';
import { SingleProduct } from './';

const SearchResultsPage = ({ allProducts, query, setQuery }) => {
    const filteredProducts = allProducts.filter(e => {
        const title = e.name.toLowerCase();
        const description = e.description.toLowerCase();
        const price = String(e.price);
        const queryArr = query.toLowerCase().split(' ');

        for (let i = 0; i < queryArr.length; i++) {
            if (title.includes(queryArr[i]) || description.includes(queryArr[i]) || price.includes(queryArr[i])) {
                return e
            }
        }
    });

    return (
        <div className="search-results">
            <SingleProduct allProducts={filteredProducts} />
        </div>
    )
}

export default SearchResultsPage;