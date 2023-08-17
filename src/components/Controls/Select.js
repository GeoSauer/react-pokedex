import { useSearch, useTypes } from '../../context/PokemonContext';
import './controls.css';

export default function Select() {
  const { handleTypeSearch } = useSearch();
  const types = useTypes();

  return (
    <select defaultValue onChange={(event) => handleTypeSearch(event.target.value)}>
      {/* //TODO circle back on why this isn't visible 
			//add 'selected' to the below option fixes it but */}
      causes an error
      <option value="" disabled hidden>
        Type
      </option>
      <option value="all">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
}
