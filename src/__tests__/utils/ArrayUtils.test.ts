import { ArrayUtils } from "~/utils";

describe('Array utils', () => {
    it('should make a unique list', () => {
        const existingHistory: string[] = ['item1', 'item2'];
        const newQuery: string = 'item1';
        const resultHistory: string[] = ArrayUtils.addToNonDuplicateArray(existingHistory, newQuery);
        expect(resultHistory).toEqual(existingHistory);
    });
});