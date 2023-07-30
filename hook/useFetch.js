import { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { PEXELS_API_KEY } from "@env";

const useFetch = (endpoint, query, page = 1, perPage = 40) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const option = {
    method: "GET",
    url: `https://api.pexels.com/v1/${endpoint}`,
    params: { query: query, page: page, per_page: perPage }, // Include pagination parameters
    headers: {
      "Content-Type": "application/json",
      // eslint-disable-next-line no-undef
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
  }, [endpoint, query, page, perPage]);

  return { data, error, loading };
};

export default useFetch;
