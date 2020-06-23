import { useState } from 'react';
import { OMDbMovie } from '~/typeDefs';
import { ArrayUtils } from '~/utils';

interface UseFavourites {
    readonly favouriteMovies: OMDbMovie[];
    readonly addToFavouriteMovies: (movie: OMDbMovie) => void;
    readonly removeFromFavourites: (imdbID: string) => void;
};

const useFavourites = (): UseFavourites => {
    const [favouriteMovies, setFavouriteMovies] = useState<OMDbMovie[]>([]);

    const addToFavouriteMovies = (movie: OMDbMovie): void => {
        const list: OMDbMovie[] = ArrayUtils.addToNonDuplicateArray(favouriteMovies, movie);
        setFavouriteMovies(list);
    };

    const removeFromFavourites = (imdbID: string): void => {
        const list: OMDbMovie[] = favouriteMovies.filter(movie => movie.imdbID !== imdbID);
        setFavouriteMovies(list);
    };

    return { favouriteMovies, addToFavouriteMovies, removeFromFavourites };
};

export default useFavourites;