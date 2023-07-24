import { useState, useEffect } from "react";
import axios from "axios";

import { PEXELS_API_KEY } from "@env";

// https://api.pexels.com/v1/
const useFetch = (endpoint, query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const option = {
    method: "GET",
    url: `https://api.pexels.com/v1/${endpoint}`,
    params: { query: query },
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.PEXELS_API_KEY,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(option);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, query]);

  return { data, error, loading };
};

export default useFetch;
