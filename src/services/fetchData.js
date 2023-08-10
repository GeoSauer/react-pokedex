export async function fetchInitialPokemon() {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const { results } = await resp.json();

  const pokePromises = results.map(async (result) => {
    const response = await fetch(result.url);
    return response.json();
  });

  const pokeDetails = await Promise.all(pokePromises);
  // console.log(pokeDetails);
  return pokeDetails;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokeapi.co/api/v2/type/');
  const { results } = await resp.json();
  const types = results.map((result) => result.name);
  return types;
}

export async function fetchPokemon(type, query) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  if (query) {
    params.set('pokemon', query);
  }
  const resp = await fetch(`https://pokeapi.co/api/v2/?${params.toString()}`);
  const data = await resp.json();
  return data.results;
}
