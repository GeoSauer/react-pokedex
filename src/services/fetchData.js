export async function fetchInitialPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const { results } = await response.json();

  const pokePromises = results.map(async (result) => {
    const response = await fetch(result.url);
    return response.json();
  });

  const pokemonDetails = await Promise.all(pokePromises);
  return pokemonDetails;
}

export async function fetchTypes() {
  const response = await fetch('https://pokeapi.co/api/v2/type/');
  const { results } = await response.json();
  const types = results.map((result) => result.name);
  return types;
}

export async function fetchPokemonByType(typeName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}/`);
    const typeData = await response.json();
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

export async function fetchPokemonByName(name) {
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
