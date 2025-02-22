import "./App.css";
import Card from "./components/card";
import SearchBar from "./components/searchBar";
import { useState } from "react";
import { useData } from "./services/data";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { data, error, loading } = useData(searchValue);
  const listFilm = data?.map((item) => (
    <Card key={item.id} title={item.title}>
      <p>{item.overview}</p>
    </Card>
  ));
  return (
    <div className="App">
      <h1>Movikipedia</h1>
      <div className="App-left">
        <SearchBar onSearch={setSearchValue} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          listFilm
        )}

        {!loading && data.length === 0 && <p>No film found</p>}
      </div>
      <div className="App-right"></div>
    </div>
  );
}

export default App;
