import React from 'react';
import { Movie } from '~/typeDefs/OMDb';

type FavouritesProps = {
    movies: Movie[];
    onSelectMovie: (movie: Movie) => void;
    onDeleteFromFavorites: (id: string) => void;
}

const Favourites: React.FC<FavouritesProps> = ({ movies, onSelectMovie, onDeleteFromFavorites }) => {
    return (
        <div className="favorites">
            <span className="title">Favorites:</span>
            <ul>
                {movies.map((movie: Movie, index: number) =>
                    <li>
                        <span onClick={() => onSelectMovie(movie)}>
                            {movie.Title}
                        </span>
                        <button onClick={() => onDeleteFromFavorites(movie.imdbID)}>x</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Favourites;