import './PokeCard.css';
import pokeBackground from '../../../src/mtn-bkgrd.jpeg';
import { decimetersToFeetAndInches, hectogramsToPounds } from '../../utils/unitConversion';
import { useState } from 'react';

export default function PokeCard({ abilities, name, height, id, weight, sprites, stats, types }) {
  const [view, setView] = useState('front');
  const weightInPounds = hectogramsToPounds(weight);
  const length = decimetersToFeetAndInches(height);

  const handleFlip = () => {
    view === 'front' ? setView('back') : setView('front');
  };

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
        <button onClick={handleFlip}>
          <img src={sprites[`${view}_default`]} className="hvr-grow-rotate" />
        </button>
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
