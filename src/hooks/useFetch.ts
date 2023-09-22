import { useState, useEffect } from "react";

// reusable custom hook to fetch data from specified urls
const useFetch = (url: string) => {
  // complete loading, error, and data stored in state
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const requestData = async () => {
      const data = await fetch(url)
        .then((response) => response.json())
        // traditionally we'd be expecting a JSON formatted response, so we would change this method to .json instead of .text
        .catch((err) => {
          console.error(err);
          setError("an error occurred");
        });

      setData(data);
      setLoading(false);
    };

    requestData();

    // reset state values on unmount or url change
    return () => {
      setLoading(true);
      setError("");
      setData("");
    };
  }, [url]);

  // return loading, error, data to the hook consumer.
  return {
    loading,
    error,
    data
  };
};

export default useFetch;
