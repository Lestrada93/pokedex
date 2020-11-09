import endpoints from './endpoints';
import helper from './helper';

/**
 * ApiConnection
 * @description Main class to make Request to the server
 */
class ApiConnection {
  constructor() {
    this.api = endpoints;
    this.limit = 50;
    this.offset = 0;
    this.count = null;
  }

  getList(offset = 0) {
    this.offset = offset;
    return fetch(this.api.list(this.limit, this.offset))
      .then((response) => response.json())
      .then((data) => {
        this.count = data.count;
        return {
          count: this.getCount(),
          data: helper.getParsedList(data),
        };
      });
  }

  getPokemonDetail(id = 1) {
    return fetch(this.api.pokemon(id))
      .then((response) => response.json())
      .then((data) => helper.getParsedDetail(data))
      .catch((err) => err);
  }

  getLimit() {
    return this.limit;
  }

  getCount() {
    return this.count;
  }
}

export default ApiConnection;
