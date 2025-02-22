import "./App.css";
import Cards from "./components/cardsList";
import DetailCard from "./components/detailCard";
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
        {selectedFilm && <DetailCard film={selectedFilm} />}
      </div>
    </div>
  );
}

export default App;
