import { useState } from "react";
import { OMDbMovie } from "~/typeDefs";

const useFavourites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<OMDbMovie[]>([]);
    
    const addToFavoriteMovies = (movie: OMDbMovie) => {
        if (favoriteMovies.includes(movie)) {
            return;
        }

        setFavoriteMovies([...favoriteMovies, movie]);
    };

    const deleteFromFavorites = (id: string) => {
        setFavoriteMovies(favoriteMovies.filter(movie => movie.imdbID !== id));
    };

    return [ favoriteMovies, addToFavoriteMovies, deleteFromFavorites ] as const;
};

export default useFavourites;