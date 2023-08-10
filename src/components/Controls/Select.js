import { fetchPokemon } from '../../services/fetchData';
import './controls.css';

export default function Select({
  types,
  setIsLoading,
  setSelectedType,
  setPokemon,
  setError,
  setQuery,
}) {
  const handleTypeChange = async (type) => {
    setIsLoading(true);
    setSelectedType(type);
    try {
      const data = await fetchPokemon(type);
      console.log(data);
      setPokemon(data);
      setIsLoading(false);
      setQuery('');
    } catch (error) {
      setError('Oops! Something went wrong');
    }
  };

  return (
    <select onChange={(event) => handleTypeChange(event.target.value)}>
      <option value="all">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
}
