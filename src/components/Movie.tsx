import React from 'react';
import { getMovieList } from '~/api/application';
import { OMBdSearchMovieResult } from '~/typeDefs';
import ShowMovie from '~/components/ShowMovie';
import SearchMovie from '~/components/SearchMovie';

const MovieComponent = () => {
    const [movieTitle, setMovieTitle] = React.useState<string>('');
    const [movieList, setMovieList] = React.useState<OMBdSearchMovieResult[] | undefined>(undefined);
    const [movieToShow, setMovieToShow] = React.useState<OMBdSearchMovieResult | undefined>(undefined);
    const [searchHistory, setSearchHistory] = React.useState<string[]>([]);
    const [favoriteMovies, setFavoriteMovies] = React.useState<OMBdSearchMovieResult[]>([]);

    /**
     * On movie title change.
     * @param e
     */
    const onMovieTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieTitle(e.target.value);
    };

    /**
     * On search movie.
     * @param title
     */
    const onSearchMovie = (title?: string) => {
        const movieToSearch: string = title !== undefined ? title : movieTitle;
        if (!searchHistory.includes(movieToSearch) && title === undefined) {
            setSearchHistory([...searchHistory, movieToSearch]);
        }
        getMovieList(movieToSearch)
            .then(movies => setMovieList(movies))
    };

    /**
     * On delete from history.
     * @param index
     */
    const onDeleteFromHistory = (index: number) => {
        const prevSearchHistory: string[] = [...searchHistory];
        prevSearchHistory.splice(index, 1);
        setSearchHistory(prevSearchHistory);
    };

    /**
     * On add to favorites.
     * @param movie
     */
    const onAddToFavoriteMovies = (movie: OMBdSearchMovieResult) => {
        if (!favoriteMovies.includes(movie)) {
            setFavoriteMovies([...favoriteMovies, movie]);
        }
    };

    /**
     * On delete form favorites.
     * @param index
     */
    const onDeleteFromFavorites = (index: number) => {
        const prevFavoriteMovies: OMBdSearchMovieResult[] = [...favoriteMovies];
        prevFavoriteMovies.splice(index, 1);
        setFavoriteMovies(prevFavoriteMovies);
    };

    return (
        <>
        <div className="container">
            <div className="favorites">
                <span className="title">Favorites:</span>
                <ul>
                    {favoriteMovies.map((movie: OMBdSearchMovieResult, index: number) =>
                        <li>
                            <span onClick={() => setMovieToShow(movie)}>
                                {movie.Title}
                            </span>
                            <span onClick={() => onDeleteFromFavorites(index)}>x</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="search-movie">
                <SearchMovie 
                    onMovieTitleChange={onMovieTitleChange}
                    movieTitle={movieTitle}
                    onSearchMovie={onSearchMovie}
                    movieList={movieList}
                    setMovieToShow={setMovieToShow}
                    searchHistory={searchHistory}
                    onDeleteFromHistory={onDeleteFromHistory}
                />
            </div>
            <div>
                {movieToShow !== undefined &&
                    <ShowMovie movie={movieToShow} onAddToFavoriteMovies={onAddToFavoriteMovies} />
                }
            </div>
        </div>
        </>
    );
}

export default MovieComponent;
