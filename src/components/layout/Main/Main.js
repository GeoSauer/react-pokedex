import Controls from '../../Controls/Controls';
import PokemonDisplay from '../../Display/PokemonDisplay';
import Error from '../../Display/Error';

export default function Main() {
  return (
    <>
      <Controls />
      <PokemonDisplay />
      <Error />
    </>
  );
}
