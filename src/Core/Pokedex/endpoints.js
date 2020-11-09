export default {
  list: (limit, offset) => `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  pokemon: (id) => `https://pokeapi.co/api/v2/pokemon/${id}`,
};
