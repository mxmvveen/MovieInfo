import React from 'react';
import { OMBdSearchMovieResult } from 'typeDefs';

interface ShowMovieProps {
    movie: OMBdSearchMovieResult;
    onAddToFavoriteMovies: (movie: OMBdSearchMovieResult) => void;
}

const ShowMovie = (props: ShowMovieProps) => {
  return (
    <div className="show-movie">
        <ul>
            {Object.entries(props.movie).map(([infoType, infoVal]) =>
                <li key={`${infoType}-${infoVal}`}>
                  {infoType !== 'Poster' && `${infoType}:`}
                  {infoType === 'Poster' ? <img src={infoVal} alt={props.movie.Title} /> : infoVal}
                </li>
            )}
            <span onClick={() => props.onAddToFavoriteMovies(props.movie)}>add to favorites</span>
        </ul>
    </div>
  );
}

export default ShowMovie;
