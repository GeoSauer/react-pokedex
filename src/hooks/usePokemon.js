import { useEffect, useState } from 'react';
import {
  fetchInitialPokemon,
  searchPokemonByName,
  searchPokemonByType,
} from '../services/fetchData.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchInitialPokemon();
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        setError('Oops! Something went wrong');
      }
    };
    fetchData();
  }, []);

  const handleTypeSearch = async (type) => {
    setIsLoading(true);
    try {
      const data = await searchPokemonByType(type);
      setPokemon(data);
      setIsLoading(false);
      setQuery('');
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  };

  const handleQuerySearch = async () => {
    setIsLoading(true);
    try {
      const data = await searchPokemonByName(query.toLowerCase());
      setPokemon(data);
      setIsLoading(false);
      setQuery('');
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  };

  return {
    pokemon,
    setPokemon,
    error,
    setError,
    isLoading,
    setIsLoading,
    handleQuerySearch,
    handleTypeSearch,
    query,
    setQuery,
  };
}
