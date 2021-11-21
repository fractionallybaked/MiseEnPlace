import React from 'react';

const SearchBar = ({searchOpen}) => {
    console.log(searchOpen)
    return (
        <div className={searchOpen? "search-bar-container show-search" : "search-bar-container hide-search"}>
            <form className="search-bar"
            onSubmit={e=>e.preventDefault()}>
                <input type="text"
                placeholder="Search for Products"
                >
                </input>
            </form>
        </div>
    )
}

export default SearchBar;