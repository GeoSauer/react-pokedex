import { useSearch } from '../../context/PokemonContext';
import './controls.css';

export default function Query() {
  const { query, setQuery, handleQuerySearch } = useSearch();

  return (
    <>
      <input value={query} type="text" onChange={(event) => setQuery(event.target.value)}></input>
      <button onClick={handleQuerySearch}>Search</button>
    </>
  );
}
