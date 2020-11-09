import helper from './helper';
import mockData from '../../../test/mocks/helperData.json';

describe('Helper', () => {
  test('Should returns the list of pokemon with the information parsed', () => {
    const result = helper.getParsedList(mockData.parseList);
    expect(result).toStrictEqual(mockData.expectedFormatted);
  });
  test('Should returns the detail of a single pokemon', () => {
    const result = helper.getParsedDetail(mockData.pokemonDetails);
    expect(result).toStrictEqual(mockData.pokemonParsed);
  });
});
