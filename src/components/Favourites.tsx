import React from 'react';
import { OMDbMovie } from '~/typeDefs';

interface FavouritesProps {
    readonly movies: OMDbMovie[];
    readonly onSelectMovie: (movie: OMDbMovie) => void;
    readonly onDeleteFromFavourites: (id: string) => void;
}

const Favourites = (props: FavouritesProps) => (
    <div className="favourites">
        <span className="title">Favorites:</span>
        <ul>
            {props.movies.map((movie: OMDbMovie) =>
                <li>
                    <span onClick={() => props.onSelectMovie(movie)}>
                        {movie.Title}
                    </span>
                    <button onClick={() => props.onDeleteFromFavourites(movie.imdbID)}>x</button>
                </li>
            )}
        </ul>
    </div>
);

export default Favourites;