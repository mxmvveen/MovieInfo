import React from 'react';

interface SearchHistoryProps {
    readonly history: string[];
    readonly onSearchMovie: (query: string) => void;
    readonly onDeleteFromHistory: (query: string) => void;
}

const SearchHistory = (props: SearchHistoryProps) => (
    <div>
        Search History
        <ul>
            {props.history.map((query: string) =>
                <li key={query}>
                    <span onClick={() => props.onSearchMovie(query)}>
                        {query}
                    </span>
                    <button onClick={() => props.onDeleteFromHistory(query)}>x</button>
                </li>
            )}
        </ul>
    </div>
);

export default SearchHistory;