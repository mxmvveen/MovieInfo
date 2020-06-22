import { useState } from 'react';
import { OMDbMovie } from '~/typeDefs';

type UseFavourtis = readonly [OMDbMovie[], (movie: OMDbMovie) => void, (id: string) => void];

const useFavourites = (): UseFavourtis => {
    const [favouriteMovies, setFavouriteMovies] = useState<OMDbMovie[]>([]);
    
    const addToFavouriteMovies = (movie: OMDbMovie) => {
        if (favouriteMovies.includes(movie)) {
            return;
        }

        setFavouriteMovies([...favouriteMovies, movie]);
    };

    const deleteFromFavourites = (id: string) => {
        setFavouriteMovies(favouriteMovies.filter(movie => movie.imdbID !== id));
    };

    return [ favouriteMovies, addToFavouriteMovies, deleteFromFavourites ];
};

export default useFavourites;