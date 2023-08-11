import { useState } from 'react';
import { usePokemonDetails, useSearch } from '../../context/PokemonContext';
import { fetchPokemonByName } from '../../services/fetchData';

export default function Query() {
  const [query, setQuery] = useState('');
  const { handleQuerySearch } = useSearch();
  const { setIsLoading } = usePokemonDetails();

  //TODO keyDown is clearing input but button click is not for some reason
  const handleSearch = async () => {
    if (query.trim() === '') {
      alert('Please enter a valid name');
      return;
    }

    try {
      setIsLoading(true);
      const data = await fetchPokemonByName(query.toLowerCase());
      if (!data) {
        setIsLoading(false);
        alert('Please enter a valid name');
        return;
      }

      handleQuerySearch(query);
      setQuery('');
      setIsLoading(false);
    } catch (error) {
      console.error('Error searching for Pokémon by name:', error);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      handleSearch();
    }
  };

  return (
    <>
      <input
        value={query}
        type="text"
        placeholder="Search by name..."
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleSearch}>Go!</button>
    </>
  );
}
