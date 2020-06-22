import { saveSearchHistory } from './SearchHistory.utils';

describe('Search history utils', () => {
    it('should make a unique history list', () => {
        const existingHistory = ['query1', 'query2'];
        const newQuery = 'query1';
        const resultHistory = saveSearchHistory(existingHistory, newQuery);
        expect(resultHistory).toEqual(existingHistory);
    });
});