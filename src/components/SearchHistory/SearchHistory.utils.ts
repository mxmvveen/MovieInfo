export function saveHistoryQuery(history: string[], query: string): string[] {
    if (history.includes(query)) {
        return history;
    }

    return [...history, query];
}