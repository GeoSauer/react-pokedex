import usePokemon from '../../hooks/usePokemon';
import './controls.css';

export default function Query() {
  const { handleQuerySearch, query, setQuery } = usePokemon();

  return (
    <>
      <input value={query} type="text" onChange={(event) => setQuery(event.target.value)}></input>
      <button onClick={handleQuerySearch}>Search</button>
    </>
  );
}
