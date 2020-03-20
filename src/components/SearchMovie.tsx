import React from 'react';
import { Movie } from 'typeDefs/application';

interface SearchMovieProps {
    onMovieTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    movieTitle: string;
    onSearchMovie: (title?: string) => void;
    movieList?: Movie[];
    setMovieToShow: (movie: Movie) => void;
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
                    {props.movieList !== undefined && props.movieList.map((movie: Movie) => {
                        return <li onClick={() => props.setMovieToShow(movie)}>
                            {movie.Title}
                        </li>
                    }) }
                </ul>
            </div>
            <div>
            {props.searchHistory.length > 0 && 'History'}
            <ul>
                {props.searchHistory.map((movieTitle: string, index: number) => <li><span onClick={() => props.onSearchMovie(movieTitle)}>{movieTitle}</span> <span onClick={() => props.onDeleteFromHistory(index)}>x</span></li>)}
            </ul>
            </div>
        </>
    );
}

export default SearchMovie;
