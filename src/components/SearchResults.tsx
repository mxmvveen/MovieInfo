import React from 'react';
import { OMDbMovie } from '~/typeDefs/OMDb';

interface SearchResultsProps {
    readonly movies: OMDbMovie[];
    readonly onSelectMovie: (movie: OMDbMovie) => void;
}

const SearchResults = (props: SearchResultsProps) => (
    <ul>
        {props.movies.map((movie: OMDbMovie, index: number) =>
            <li onClick={() => props.onSelectMovie(movie)} key={`${index}-${movie.Title}`}>
                {movie.Title}
            </li>
        )}
    </ul>
);

export default SearchResults;