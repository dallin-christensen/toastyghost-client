import { useEffect } from "react";
import useTriggerFetch from "./useTriggerFetch";

// reusable custom hook to fetch data from specified urls
const useFetch = (url: string, options?: RequestInit) => {
  const [triggerFetch, { data, loading, error, setData, setLoading, setError }] = useTriggerFetch(url, options)

  useEffect(() => {
    triggerFetch()

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
