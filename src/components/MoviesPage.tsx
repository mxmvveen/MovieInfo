import React from 'react';
import SearchMovie from '~/components/SearchMovie';
import SearchResults from './SearchResults';
import ShowMovie from './ShowMovie';
import SearchHistory from './SearchHistory';
import Favourites from './Favourites';
import { useMovies, useFavourites } from '~/hooks';

const MoviesPage = () => {
    const {
        movieList,
        onSearchMovie,
        selectedMovie,
        setSelectedMovie,
        searchHistory,
        deleteFromHistory,
    } = useMovies();
    
    const { favouriteMovies, addToFavouriteMovies, removeFromFavourites } = useFavourites();

    return (
        <div className="container">
            <Favourites 
                movies={favouriteMovies} 
                onSelectMovie={setSelectedMovie}
                onDeleteFromFavourites={removeFromFavourites}
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
                            <button onClick={() => addToFavouriteMovies(selectedMovie)}>Add to favourite</button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default MoviesPage;
