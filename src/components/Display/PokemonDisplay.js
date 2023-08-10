import { usePokemonDetails } from '../../context/PokemonContext';
import '../layout/Main/Main.css';
import PokeCard from '../PokeCard/PokeCard';

export default function PokemonDisplay() {
  const { pokemon, isLoading, error } = usePokemonDetails();

  if (isLoading && !error) return <div className="poke bounce"></div>;
  // console.log({ pokemon });
  return (
    <>
      {pokemon && (
        <div className="display">
          {pokemon.map((pokemon) => (
            <PokeCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      )}
    </>
  );
}
