import React from 'react';
import { Movie } from '~/typeDefs/OMDb';

interface ShowMovieProps {
    movie: Movie;
}

const ShowMovie = (props: ShowMovieProps) => {
  return (
    <ul>
        {Object.entries(props.movie).map(([infoType, infoVal]) =>
            <li key={`${infoType}-${infoVal}`}>
              {infoType !== 'Poster' && `${infoType}:`}
              {infoType === 'Poster' ? <img src={infoVal} alt={props.movie.Title} /> : infoVal}
            </li>
        )}
    </ul>
  );
}

export default ShowMovie;
