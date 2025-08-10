import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network Error");
        return res.json();
      })
      .then((json) => !ignore && setData(json))
      .catch((err) => !ignore && setError(err))
      .finally(() => !ignore && setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
