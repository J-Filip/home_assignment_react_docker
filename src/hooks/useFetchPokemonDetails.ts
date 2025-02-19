import { useEffect, useState } from 'react';
import { Pokemon, PokemonDetails, PokemonListPayload } from '../routes/PokemonListPage';

// interface FetchedData<T> {
//   data: T | null;
//   isLoading: boolean;
//   error: string;
// }
interface FetchedData {
  data: PokemonListPayload | null;
  detailsList: PokemonDetails[] | null;
  isLoading: boolean;
  error: string;
}

const BASE_URL = 'https://pokeapi.co/api/v2/';

const useFetchPokemonDetails = (url: string): FetchedData => {
  const [data, setData] = useState<PokemonListPayload | null>(null);
  const [detailsList, setDetailsList] = useState<PokemonDetails[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${url}`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const pokemonList = await response.json();
        setData(pokemonList);
        setError(null);

        // fetch all pokemons by their url

        const pokemonDetailsPromises = pokemonList.results.map(async (pokemon: Pokemon) => {
          const pokemonUrl = pokemon.url;
          try {
            const response = await fetch(pokemonUrl);
            if (!response.ok) {
              throw new Error(`HTTP error: Status ${response.status}`);
            }
            const pokemonDetails = await response.json();
            return pokemonDetails;
          } catch (err: any) {
            setError(err.message);
            setData(null);
          }
        });

        const pokemonDetailsList = await Promise.all(pokemonDetailsPromises);
        setDetailsList(pokemonDetailsList);

        // setData(postsData);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, detailsList, isLoading, error };
};

export default useFetchPokemonDetails;
