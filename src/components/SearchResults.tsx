import React from 'react';
import { Movie } from '~/typeDefs/OMDb';

type SearchResultsProps = {
    movies: Movie[];
    onSelectMovie: (movie: Movie) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ movies, onSelectMovie }) => {
    return (
        <ul>
            {movies.map((movie: Movie, index: number) =>
                <li onClick={() => onSelectMovie(movie)} key={`${index}-${movie.Title}`}>
                    {movie.Title}
                </li>
            )}
        </ul>
    );
}

export default SearchResults;