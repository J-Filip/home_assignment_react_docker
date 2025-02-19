import { useEffect, useState } from 'react';

interface FetchedData<T> {
  data: T | null;
  isLoading: boolean;
  error: string;
}

const BASE_URL = 'https://pokeapi.co/api/v2/';

const useFetch = <T>(url: string): FetchedData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${url}`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
