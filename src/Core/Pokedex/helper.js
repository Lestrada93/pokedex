/**
 * getPokemonId
 * @description Get the id from the url to prevent more request to the server
 * @param {String} field
 * @returns {String}
 */
function getPokemonId(field = '') {
  return field.substring(0, field.length - 1).split('/').pop();
}

/**
 * getCapitalize
 * @description Return the value in capitalize
 * Used for Google charts
 * @param {String} name
 * @returns {String}
 */
function getCapitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * getBasicPokemonInfo
 * @description Returns the basic structure of the pokemons for the grid
 * @param {Object} data
 * @returns {{id: (String|number), name: (*|string)}}
 */
function getBasicPokemonInfo(data = {}) {
  return {
    id: getPokemonId(data.url) || 0,
    name: data.name || 'N/A',
  };
}

/**
 * getParsedList
 * @description Returns the list of pokemon parsed
 * @param {Array} data
 * @returns {*}
 */
function getParsedList(data = {}) {
  return data.results.map((item) => getBasicPokemonInfo(item));
}

/**
 * getChartData
 * @description Gets the data structure equired to display the chart
 * @param {Array} data
 * @returns {string[][]}
 */
function getChartData(data = []) {
  const chartData = [['Skill', '']];
  const skills = data.map((item) => [getCapitalize(item.stat.name) || 'N/A', item.base_stat || 0]);
  return chartData.concat(skills);
}

/**
 * getParsedDetail
 * @description Get the structure requires to display the Detail view
 * @param data
 * @returns {Object}
 */
function getParsedDetail(data = {}) {
  return {
    id: data.id,
    name: data.name || 'N/A',
    height: data.height || 0,
    weight: data.weight || 0,
    type: (data.types && data.types[0].type.name) || 'N/A',
    experience: data.base_experience || 0,
    chartData: getChartData(data.stats),
  };
}

/**
 * fetchData
 * @description Get the list of pokemon
 * @param {Object} api
 * @param {Function} setPokemons
 * @returns {Promise<void>}
 */
async function fetchData(api, setPokemons) {
  const response = await api.getList();
  setPokemons(response);
}

export default { // eslint-disable-line import/no-anonymous-default-export
  fetchData,
  getParsedList,
  getParsedDetail,
};
