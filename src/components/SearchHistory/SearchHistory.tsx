import React from 'react';

type SearchHistoryProps = {
    history: string[];
    onSearchMovie: (query: string) => void;
    onDeleteFromHistory: (query: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onSearchMovie, onDeleteFromHistory }) => {
    return (
        <div>
            Search History
            <ul>
                {history.map((query: string) =>
                    <li key={`${query}`}>
                        <span onClick={() => onSearchMovie(query)}>
                            {query}
                        </span>
                        <button onClick={() => onDeleteFromHistory(query)}>x</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SearchHistory;