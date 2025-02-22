import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [inputValue, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={() => onSearch(inputValue)}>Search</button>
        </div>
    );
}
