import {useState, useEffect} from 'react'
import './SearchBar.css'
import searchIcon from '../assets/search.svg'

function SearchBar({onSearch, onSearchBarClick}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        onSearch(searchQuery);
    }, [searchQuery]);

    function handleInput(e) {
        setSearchQuery(e.target.value);
        setSearchInput(e.target.value);
    }

    function clearInput(e) {
        setSearchQuery("");
        setSearchInput("");
    }

    return (
        <>
            <div className="search-bar">
                <img className="search-icon" alt="Search Bar" src={searchIcon} />
                <input 
                    id="search-input-area"
                    placeholder="Search"
                    value={searchInput}
                    onInput={(e) => handleInput(e)}
                    onClick={onSearchBarClick}
                    inputMode="none">
                </input>
                <button className="clear-search-btn"
                    onClick={(e) => clearInput(e)}>
                        X
                </button>
            </div>
        </>
    )
}

export default SearchBar