import usePokemon from '../../hooks/usePokemon';
import { useTypes } from '../../hooks/useTypes';
import './controls.css';

export default function Select() {
  const { handleTypeSearch } = usePokemon();
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
