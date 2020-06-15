import React, { useState } from 'react';

export interface SearchMovieProps {
    onSearchMovie: (title: string) => void;
}

const SearchMovie: React.FC<SearchMovieProps> = ({ onSearchMovie }) => {
    const [ query, setQuery ] = useState("");
    
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearchMovie(query);
    };

    return (
        <div className="search-movie">
            <form onSubmit={onFormSubmit}>
                Search movie: <input type="text" required onChange={(e) => setQuery(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchMovie;
