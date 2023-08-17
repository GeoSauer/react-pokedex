import { useSearch, useTypes } from '../../context/PokemonContext';
import './controls.css';

export default function Type() {
  const { handleTypeSearch } = useSearch();
  const types = useTypes();

  return (
    <select onChange={(event) => handleTypeSearch(event.target.value)}>
      <option value="all">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
}
