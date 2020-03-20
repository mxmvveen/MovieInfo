import React from 'react';
import { Movie } from 'typeDefs/application';

interface ShowMovieProps {
    movie: Movie;
    onAddToFavoriteMovies: (movie: Movie) => void;
}

const ShowMovie = (props: ShowMovieProps) => {
  return (
    <div className="show-movie">
        <ul>
            {Object.entries(props.movie).map(([infoType, infoVal]) => {
                return <li>{infoType !== 'Poster' && `${infoType}:`} {infoType === 'Poster' ? <img src={infoVal} alt={props.movie.Title} /> : infoVal}</li>
            })}
             <span onClick={() => props.onAddToFavoriteMovies(props.movie)}>(add to favorites)</span>
        </ul>
    </div>
  );
}

export default ShowMovie;
