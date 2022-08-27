import { useCallback, useState } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(
    (url = initialUrl) => {
      setStatus("loading");
      return fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.message);
          setStatus("success");
        })
        .catch((err) => {
          setError(err);
          console.log(err);
          setStatus("error");
        });
    },
    [initialUrl]
  );

  return {
    data,
    isSuccess: status === "success",
    isLoading: status === "loading",
    isError: status === "error",
    error,
    run,
    setData,
  };
};

export default useFetch;
