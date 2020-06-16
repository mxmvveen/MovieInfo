import React, { useState } from 'react';

interface SearchMovieProps {
    onSearchMovie: (title: string) => void;
}

const SearchMovie = (props: SearchMovieProps) => {
    const [query, setQuery] = useState('');
    
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearchMovie(query);
    };

    return (
        <div className="search-movie">
            <form onSubmit={onFormSubmit}>
                Search movie: <input type="text" required onChange={(e) => setQuery(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchMovie;
