import './PokeCard.css';
import pokeBackground from '../../../src/mtn-bkgrd.jpeg';

export default function PokeCard({
  // url_image,
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
  other,
  types,
}) {
  console.log(types);
  return (
    <div
      className="poke-card hvr-grow-shadow"
      // style={{ background: other.dream_world.front_default }}
    >
      <div className="card-header">
        <span className="name">{name}</span>
        <span className="hp">{} HP</span>
      </div>{' '}
      <div
        className="img-container"
        style={{ background: `url(${pokeBackground})`, backgroundRepeat: 'no-repeat' }}
      >
        {/* <a href={pokedex} target="_blank" rel="noreferrer"> */}
        {/* <img src={url_image} className="hvr-grow-rotate" /> */}
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
        <span>Length: {height}&apos;&apos;, </span>
        <span>Weight: {weight}lbs.</span>
      </div>
      <div className="abilities">
        {/* <p>{ability_1}</p> */}
        <hr />
        {/* <p>{ability_2}</p> */}
        <hr />
        {/* <p>{ability_hidden}</p> */}
      </div>
      <div className="card-footer">
        {/* <span>Attack: {attack}</span> */}
        {/* <span>Defense: {defense}</span> */}
        <span>{id}/801</span>
      </div>
    </div>
  );
}
