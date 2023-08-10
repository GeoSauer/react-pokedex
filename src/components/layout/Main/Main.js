import Select from '../../Controls/Select';
import Query from '../../Controls/Query.js';
import PokemonDisplay from '../../Display/PokemonDisplay';
import { usePokemonDetails } from '../../../context/PokemonContext';
import '../../Controls/controls.css';

export default function Main() {
  const { error } = usePokemonDetails();

  return (
    <>
      <div className="controls">
        <Select />
        <Query />
      </div>
      <PokemonDisplay />
      <div className="error">
        <p>{error}</p>
      </div>
    </>
  );
}
