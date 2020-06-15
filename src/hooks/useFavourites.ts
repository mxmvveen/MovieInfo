import { useState } from "react";
import { Movie } from "~/typeDefs/OMDb";

const useFavourites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
    
    const addToFavoriteMovies = (movie: Movie) => {
        if (favoriteMovies.includes(movie)) {
            return;
        }

        setFavoriteMovies([...favoriteMovies, movie]);
    };

    const deleteFromFavorites = (id: string) => {
        setFavoriteMovies(favoriteMovies.filter(movie => movie.imdbID !== id));
    };

    return [ favoriteMovies, addToFavoriteMovies, deleteFromFavorites ] as const;
}

export default useFavourites;