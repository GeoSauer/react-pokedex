import usePokemon from '../../hooks/usePokemon';
import '../layout/Main/Main.css';
import PokeCard from '../PokeCard/PokeCard';

export default function PokemonDisplay() {
  const { pokemon, isLoading, error } = usePokemon();
  if (isLoading && !error) return <div className="poke bounce"></div>;
  return (
    <div className="display">
      {pokemon.map((pokemon) => (
        <PokeCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
