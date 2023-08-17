import { usePokemonDetails } from '../../context/PokemonContext';
import PokeCard from '../PokeCard/PokeCard';
import Error from '../Display/Error';
import '../layout/Main/Main.css';

export default function PokemonDisplay() {
  const { pokemon, isLoading, error } = usePokemonDetails();
  if (isLoading && !error) return <div className="poke bounce"></div>;

  if (error) {
    <Error />;
  }

  if (!pokemon) {
    return null;
  }

  if (!Array.isArray(pokemon)) {
    return (
      <div className="display">
        <PokeCard {...pokemon} />
      </div>
    );
  }

  return (
    <div className="display">
      {pokemon.map((pokemon) => (
        <PokeCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
