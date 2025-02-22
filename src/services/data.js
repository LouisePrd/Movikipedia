import { useState, useEffect } from "react";

export const useData = (name) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // https://api.themoviedb.org/3/movie/550?api_key=4863270d28e58593edc422370d99221c
  useEffect(() => {
    if (!name) return;
    const url =
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};
