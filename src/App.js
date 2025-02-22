import "./App.css";
import Cards from "./components/Cards";
import DetailCard from "./components/DetailCard";
import SearchBar from "./components/SearchBar";
import RateFilter from "./components/RateFilter";
import { useState } from "react";
import { useData } from "./services/data";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { data, error, loading } = useData(searchValue);
  const [launched, setLaunch] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("5");

  const filteredFilms = data?.filter((item) => {
    if (!isChecked) return true;
    return item.vote_average >= parseFloat(inputValue);
  });

  const handleClick = (value) => {
    setSearchValue(value);
    setLaunch(true);
  };

  const handleSelectFilm = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div className="App">
      <div className="AppLeft">
        <h1>Movikipedia</h1>
        <RateFilter
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          inputValue={inputValue}
          setValue={setInputValue}
        />
        <SearchBar onSearch={handleClick} />
        <div className="cards">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <ul>
              {filteredFilms && filteredFilms.length > 0 ? (
                filteredFilms.map((item) => (
                  <li key={item.id} onClick={() => handleSelectFilm(item)}>
                    <Cards title={item.title}>
                      <p>{item.overview}</p>
                    </Cards>
                  </li>
                ))
              ) : (
                <p>No film matches the filter</p>
              )}
            </ul>
          )}
        </div>

        {!loading && launched && data.length === 0 && <p>No film found</p>}
      </div>
      <div className="AppRight">
        {selectedFilm && <DetailCard selectedFilm={selectedFilm} />}
        {!selectedFilm && <p className="notSelected">No film selected</p>}
      </div>
    </div>
  );
}

export default App;
