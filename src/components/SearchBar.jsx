import { useState, useEffect } from 'react'
import './SearchBar.css'
import searchIcon from '../assets/search.svg'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        onSearch(query);
    }, [query]);

    function handleInput(e) {
        setQuery(e.target.value);
    }

    return (
        <>
        <div className="top-cover"></div>
        <div className="search-bar">
            <img className="search-icon" alt="Search Bar" src={searchIcon} />
            <input 
                className="search-input-area"
                placeholder="Search"
                onInput={(e) => handleInput(e)}
            ></input>
        </div>
        </>
    )
}

export default SearchBar