import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchOpen, setSearchOpen, query, setQuery}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/products/searchresults');
    }

    return (
        <div className={searchOpen ? "search-bar-container show-search" : "search-bar-container hide-search"}>
            <form className="search-bar"
                onSubmit={e => {
                    e.preventDefault();
                    handleClick();
                    setSearchOpen(false);
                
                }}>
                <input type="text"
                    id="product-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for Products"
                >
                </input>
            </form>
        </div>
    )
}

export default SearchBar;