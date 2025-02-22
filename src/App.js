import "./App.css";
import Cards from "./components/cards";
import SearchBar from "./components/searchBar";
import { useState } from "react";
import { useData } from "./services/data";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { data, error, loading } = useData(searchValue);
  const [launched, setLaunch] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const listFilm = data?.map((item) => (
    <li key={item.id} onClick={() => handleSelectFilm(item)}>
      <Cards title={item.title}>
        <p>{item.overview}</p>
      </Cards>
    </li>
  ));

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
        <SearchBar onSearch={handleClick} />

        <div className="cards">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            listFilm
          )}
        </div>

        {!loading && launched && data.length === 0 && <p>No film found</p>}
      </div>
      <div className="AppRight">
        {selectedFilm && (
          <div className="filmDetails">
            <h2>{selectedFilm.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedFilm.poster_path}`}
              alt={selectedFilm.title}
            />
            <div className="text">
              <p>Original title: {selectedFilm.original_title}</p>
              <p>Original language: {selectedFilm.original_language}</p>
              <p>Popularity: {selectedFilm.popularity}</p>
              <p>{selectedFilm.overview}</p>
              <p>Release date: {selectedFilm.release_date}</p>
              <p>Rating: {selectedFilm.vote_average}</p>
              <p>Vote count: {selectedFilm.vote_count}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
