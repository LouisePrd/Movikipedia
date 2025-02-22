import React, { useState } from "react";
import "../assets/styles/searchBar.css";

export default function SearchBar({ onSearch }) {
    const [inputValue, setValue] = useState("");
    return (
        <div className="search">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={() => onSearch(inputValue)}>Search</button>
        </div>
    );
}
