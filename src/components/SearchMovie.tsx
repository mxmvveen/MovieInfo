import React from 'react';
import { OMBdSearchMovieResult } from '~/typeDefs';

export interface SearchMovieProps {
    onMovieTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    movieTitle: string;
    onSearchMovie: (title?: string) => void;
    movieList?: OMBdSearchMovieResult[];
    setMovieToShow: (movie: OMBdSearchMovieResult) => void;
    searchHistory: string[];
    onDeleteFromHistory: (index: number) => void;
}

const SearchMovie = (props: SearchMovieProps) => {

    /**
     * On form submit.
     * @param e
     */
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearchMovie();
    };

    return (
        <>
            <div className="search-movie">
                <form onSubmit={onFormSubmit}>
                    Search movie: <input type="text" onChange={props.onMovieTitleChange}/>
                    <button>Search</button>
                </form>
                <ul>
                    {props.movieList !== undefined && props.movieList.map((movie: OMBdSearchMovieResult, index: number) =>
                        <li onClick={() => props.setMovieToShow(movie)} key={`${index}-${movie.Title}`}>
                            {movie.Title}
                        </li>
                    ) }
                </ul>
            </div>
            <div>
                {props.searchHistory.length > 0 && 'History'}
                <ul>
                    {props.searchHistory.map((movieTitle: string, index: number) =>
                        <li key={`${index}-${movieTitle}`}>
                            <span onClick={() => props.onSearchMovie(movieTitle)}>
                                {movieTitle}
                            </span>
                            <span onClick={() => props.onDeleteFromHistory(index)}>x</span>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default SearchMovie;
