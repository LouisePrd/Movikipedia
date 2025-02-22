import "../assets/styles/detailCard.css";

export default function detailCard({ selectedFilm }) {
  return (
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
  );
}
