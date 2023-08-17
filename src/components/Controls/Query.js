import { useState } from 'react';
import { usePokemonDetails, useSearch } from '../../context/PokemonContext';
import { fetchPokemonByName } from '../../services/fetchData';

export default function Query() {
  const [query, setQuery] = useState('');
  const { handleQuerySearch } = useSearch();
  const { setIsLoading } = usePokemonDetails();

  //TODO keyDown is clearing input but button click is not for some reason
  //TODO combine the select/query so users can search by name only within the selected list
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
        pattern="[A-Za-z]"
        placeholder="Search by name..."
        // onChange={(event) => setQuery(event.target.value)}
        onChange={(event) => {
          const newValue = event.target.value;
          if (/^[A-Za-z]*$/.test(newValue)) {
            setQuery(newValue);
          }
        }}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleSearch}>Go!</button>
    </>
  );
}
