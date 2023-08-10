export async function fetchInitialPokemon() {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const { results } = await resp.json();

  const pokePromises = results.map(async (result) => {
    const response = await fetch(result.url);
    return response.json();
  });

  const pokeDetails = await Promise.all(pokePromises);
  return pokeDetails;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokeapi.co/api/v2/type/');
  const { results } = await resp.json();
  const types = results.map((result) => result.name);
  return types;
}

export async function searchPokemonByType(typeName) {
  try {
    const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${typeName}/`);
    const typeData = await typeResponse.json();
    const pokemonPromises = typeData.pokemon.map(async (pokemonInfo) => {
      const pokemonResponse = await fetch(pokemonInfo.pokemon.url);
      return pokemonResponse.json();
    });
    const pokemonDetails = await Promise.all(pokemonPromises);
    return pokemonDetails;
  } catch (error) {
    console.error('Error searching for Pokémon by type:', error);
    throw error;
  }
}

export async function searchPokemonByName(name) {
  try {
    if (!name) {
      alert('Please enter a valid name');
    } else {
      const nameResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      if (nameResponse.status !== 200) {
        alert('Please enter a valid name');
      }
      const pokemonDetails = await nameResponse.json();
      return pokemonDetails;
    }
  } catch (error) {
    console.error('Error searching for Pokémon by type:', error);
    throw error;
  }
}
