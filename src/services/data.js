import { useState, useEffect } from "react";

export const useData = (name) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!name) return;
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      name
    )}&include_adult=false&language=en-US&page=1&api_key=${api_key}`;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        const json = await response.json();
        setData(json.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  return { data, error, loading };
};
