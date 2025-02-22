import "../assets/styles/rateFilter.css";
import "../assets/styles/rateFilter.css";
import React from "react";

export default function RateFilter({ isChecked, setIsChecked, inputValue, setValue }) {
  return (
    <div className="rateFilter">
      <div className="filter">
        <input
          type="checkbox"
          id="filter"
          name="drone"
          value="filter"
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
        />
        <label htmlFor="filter">Search by ratings</label>
      </div>

      <input
        type="range"
        id="Rating"
        name="Rating"
        min="0"
        max="10"
        onChange={(e) => setValue(e.target.value)}
        value={inputValue}
        disabled={!isChecked}
      />
      <p>{inputValue}</p>
    </div>
  );
}
