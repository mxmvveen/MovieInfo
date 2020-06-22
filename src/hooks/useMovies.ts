import { useState } from 'react';
import { OMDbMovie } from '~/typeDefs';
import { getMovieList } from '~/api/application';
import { saveSearchHistory } from '~/components/SearchHistory/SearchHistory.utils';

const useMovies = () => {
    const [movieList, setMovieList] = useState<OMDbMovie[] | undefined>([]);
    const [selectedMovie, setSelectedMovie] = useState<OMDbMovie | null>(null);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const onSearchMovie = (searchQuery: string) => {
        saveQueryInHistory(searchQuery);
        getMovieList(searchQuery)
            .then(movies => movies !== undefined && setMovieList(movies))
    };

    const saveQueryInHistory = (searchQuery: string) => {
        setSearchHistory(saveSearchHistory(searchHistory, searchQuery));
    };

    const deleteFromHistory = (query: string) => {
        setSearchHistory(searchHistory.filter(item => item !== query));
    };

    return [
        movieList,  
        onSearchMovie, 
        selectedMovie,  
        setSelectedMovie,  
        searchHistory,
        deleteFromHistory,
    ] as const;
}

export default useMovies;