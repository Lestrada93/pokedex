import fetchMock from 'jest-fetch-mock';
import ApiConnection from './ApiConection';
import mockData from '../../../test/mocks/helperData.json';

fetchMock.enableMocks();

const api = new ApiConnection();

describe('ApiConnection class', () => {
  describe('getList', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    test('Should return an object with the count and list of pokemon', async () => {
      fetch.mockResponseOnce(JSON.stringify(
        {
          count: mockData.count,
          results: mockData.parseList.results,
        },
      ));

      const response = await api.getList();
      expect(response.count).toEqual(mockData.count);
      expect(response.data).toEqual(mockData.expectedFormatted);
    });
  });
});
