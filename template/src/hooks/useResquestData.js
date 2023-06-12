import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.log(error);
      });
  }, []);
  return [data, isLoading, error];
};

export default useRequestData;
