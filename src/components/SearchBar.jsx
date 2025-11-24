import {useState, useEffect} from 'react'
import './styles/SearchBar.css'
import searchIcon from '../assets/search.svg'
import clearButton from '../assets/clear-button.svg'

function SearchBar({onSearch, onSearchBarClick}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [clearBtnDisplay, setClearBtnDisplay] = useState({display: "none;"})

    useEffect(() => {
        onSearch(searchQuery);
    }, [searchQuery]);

    function handleInput(e) {
        setSearchQuery(e.target.value);
        setSearchInput(e.target.value);

        const clearButton = document.getElementById("clear-search-btn");
        clearButton.style.display = "block";
    }

    function clearInput() {
        setSearchQuery("");
        setSearchInput("");
        
        const searchInputArea = document.getElementById("search-input-area")
        searchInputArea.focus();
        
        const clearButton = document.getElementById("clear-search-btn");
        clearButton.style.display = "none";
    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            document.getElementById("search-input-area").blur();
        }
    }

    return (
        <>
            <div className="search-bar">
                <img className="search-icon" alt="Search Icon" src={searchIcon} />
                <input 
                    id="search-input-area"
                    placeholder="Search"
                    value={searchInput}
                    onKeyDown={(e) => handleEnter(e)}
                    onInput={(e) => handleInput(e)}
                    onClick={onSearchBarClick}
                    inputMode="none">
                </input>
                <button id="clear-search-btn" onClick={clearInput}>
                    <img alt="Clear Input" src={clearButton}/>
                </button>
            </div>
        </>
    )
}

export default SearchBar