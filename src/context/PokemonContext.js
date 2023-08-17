import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchInitialPokemon,
  fetchTypes,
  fetchPokemonByName,
  fetchPokemonByType,
} from '../services/fetchData';

const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [artStyle, setArtStyle] = useState('default');

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

  const value = {
    pokemon,
    setPokemon,
    isLoading,
    setIsLoading,
    error,
    setError,
    artStyle,
    setArtStyle,
  };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
}

export function usePokemonDetails() {
  return useContext(PokemonContext);
}

export function useTypes() {
  const [types, setTypes] = useState([]);
  const { setIsLoading, setError } = usePokemonDetails();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchTypes();
        const filteredTypes = data.slice(0, -2);
        setTypes(filteredTypes);
        setIsLoading(false);
      } catch (error) {
        setError('Oops! Something went wrong');
      }
    };
    fetchData();
  }, [setIsLoading, setError]);
  return types;
}

export function useSearch() {
  const { setIsLoading, setPokemon, setError } = usePokemonDetails();

  async function handleTypeSearch(type) {
    setIsLoading(true);
    try {
      if (type === 'all') {
        const data = await fetchInitialPokemon();
        setPokemon(data);
      } else {
        const data = await fetchPokemonByType(type);
        setPokemon(data);
      }
      setIsLoading(false);
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  }

  async function handleQuerySearch(query) {
    setIsLoading(true);
    try {
      const data = await fetchPokemonByName(query.toLowerCase());
      setPokemon(data);
      setIsLoading(false);
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  }
  return { handleTypeSearch, handleQuerySearch };
}
