import './PokeCard.css';
import pokeBackground from '../../../src/mtn-bkgrd.jpeg';
import { decimetersToFeetAndInches, hectogramsToPounds } from '../../utils/unitConversion';

export default function PokeCard({
  // url_image,
  abilities,
  name,
  // attack,
  // defense,
  // hp,
  height,
  id,
  weight,
  // type_1,
  // species_id,
  // ability_1,
  // ability_2,
  // ability_hidden,
  // pokedex,
  // color_1,
  sprites,
  stats,
  types,
}) {
  console.log(stats);
  const weightInPounds = hectogramsToPounds(weight);
  const length = decimetersToFeetAndInches(height);
  return (
    <div className="poke-card hvr-grow-shadow">
      <div className="card-header">
        <span className="name">{name}</span>
        <span className="hp">{stats[0].base_stat} HP</span>
      </div>{' '}
      <div
        className="img-container"
        style={{ background: `url(${pokeBackground})`, backgroundRepeat: 'no-repeat' }}
      >
        {/* <a href={pokedex} target="_blank" rel="noreferrer"> */}
        <img src={sprites.front_default} className="hvr-grow-rotate" />
        {/* </a> */}
      </div>
      <div className="physical-stats">
        <span>
          {types.map((type, i) => (
            <span key={i}>
              {type.type.name}
              {i !== types.length - 1 ? '/' : ' '}
            </span>
          ))}
          Pokémon
        </span>
        <span>
          Length: {length.feet}&apos; {length.inches}&apos;&apos;,{' '}
        </span>
        <span>Weight: {weightInPounds}lbs.</span>
      </div>
      <div className="abilities">
        {abilities.map((ability, i) => (
          <span key={i}>
            {ability.ability.name.replace('-', ' ')}
            {i !== abilities.length - 1 ? <hr /> : null}
          </span>
        ))}
      </div>
      <div className="card-footer">
        <span>Attack: {stats[1].base_stat}</span>
        <span>Defense: {stats[2].base_stat}</span>
        <span>{id}/1281</span>
      </div>
    </div>
  );
}
