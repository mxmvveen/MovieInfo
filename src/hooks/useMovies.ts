import { useState } from 'react';
import { OMDbMovie } from '~/typeDefs';
import { getMovieList } from '~/api';
import { ArrayUtils } from '~/utils';

interface UserMovies {
    readonly movieList?: OMDbMovie[],
    readonly onSearchMovie: (query: string) => Promise<false | void>;
    readonly selectedMovie: OMDbMovie | null;
    readonly setSelectedMovie: (movie: OMDbMovie) => void;
    readonly searchHistory: string[];
    readonly deleteFromHistory: (query: string) => void;
}

const useMovies = (): UserMovies => {
    const [movieList, setMovieList] = useState<OMDbMovie[] | undefined>([]);
    const [selectedMovie, setSelectedMovie] = useState<OMDbMovie | null>(null);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const onSearchMovie = (searchQuery: string): Promise<false | void> => {
        saveQueryInHistory(searchQuery);
        return getMovieList(searchQuery)
            .then((movies: OMDbMovie[] | void) => movies !== undefined && setMovieList(movies))
    };

    const saveQueryInHistory = (searchQuery: string): void => {
        setSearchHistory(ArrayUtils.addToNonDuplicateArray(searchHistory, searchQuery));
    };

    const deleteFromHistory = (query: string): void => {
        setSearchHistory(searchHistory.filter(item => item !== query));
    };

    return {
        movieList,  
        onSearchMovie, 
        selectedMovie,  
        setSelectedMovie,  
        searchHistory,
        deleteFromHistory,
    }
}

export default useMovies;