import { usePokemonDetails } from '../../context/PokemonContext';

export default function Error() {
  const { error } = usePokemonDetails();

  return (
    <div className="error">
      <p>{error}</p>
    </div>
  );
}
