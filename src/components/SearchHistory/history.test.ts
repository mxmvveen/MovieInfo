import { saveHistoryQuery } from "./history.utils";

describe("history utils", () => {
    it("should make a unique history list", () => {
        const existingHistory = ["query1", "query2"];
        const newQuery = "query1";
        const resultHistory = saveHistoryQuery(existingHistory, newQuery);
        expect(resultHistory).toEqual(existingHistory);
    });
});