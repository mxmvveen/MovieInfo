import React from 'react';
import SearchMovie from '~/components/SearchMovie';
import SearchResults from './SearchResults';
import ShowMovie from './ShowMovie';
import SearchHistory from './SearchHistory/SearchHistory';
import Favourites from './Favourites';
import useMovies from '~/hooks/useMovies';
import useFavourites from '~/hooks/useFavourites';

const MoviesPage = () => {
    const [ 
        movieList,
        onSearchMovie,
        selectedMovie,
        setSelectedMovie,
        searchHistory,
        deleteFromHistory,
    ] = useMovies();
    
    const [ favouriteMovies, addToFavoriteMovies, deleteFromFavourites ] = useFavourites();

    return (
        <div className="container">
            <Favourites 
                movies={favouriteMovies} 
                onSelectMovie={setSelectedMovie}
                onDeleteFromFavourites={deleteFromFavourites}
            />
            <div className="search-movie">
                <SearchMovie onSearchMovie={onSearchMovie} />
                {movieList !== undefined &&
                    <SearchResults movies={movieList} onSelectMovie={setSelectedMovie}/>
                }
                {searchHistory.length > 0 && 
                    <SearchHistory 
                        history={searchHistory} 
                        onSearchMovie={onSearchMovie}
                        onDeleteFromHistory={deleteFromHistory}
                    />
                }
            </div>
            <div className="show-movie">
                {selectedMovie !== null && (
                        <>
                            <ShowMovie movie={selectedMovie} />
                            <button onClick={() => addToFavoriteMovies(selectedMovie)}>Add to favourite</button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default MoviesPage;
