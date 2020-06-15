import { useState } from "react";
import { Movie } from "~/typeDefs/OMDb";
import { getMovieList } from "~/api/application";
import { saveHistoryQuery } from "~/components/SearchHistory/history.utils";

const useMovies = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const onSearchMovie = (searchQuery: string) => {
        saveQueryInHistory(searchQuery);
        getMovieList(searchQuery).then(movies => setMovieList(movies))
    };

    function saveQueryInHistory(searchQuery: string) {
        setSearchHistory(saveHistoryQuery(searchHistory, searchQuery));
    }

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