import { useState } from "react";

// reusable custom hook to fetch data from specified urls
const useTriggerFetch = (url: string, options?: RequestInit) => {
  // complete loading, error, and data stored in state
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const triggerFetch = async () => {
    const data = await fetch(url, options)
      .then((response) => response.json())
      // traditionally we'd be expecting a JSON formatted response, so we would change this method to .json instead of .text
      .catch((err) => {
        console.error(err);
        setError("an error occurred");
      });

    setData(data);
    setLoading(false);

    return data
  }

  return [
    triggerFetch,
    {
      loading,
      error,
      data,
      setLoading,
      setData,
      setError,
    }
  ] as const
};

export default useTriggerFetch;
