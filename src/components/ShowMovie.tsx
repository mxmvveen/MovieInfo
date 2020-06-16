import React from 'react';
import { OMDbMovie } from '~/typeDefs';

interface ShowMovieProps {
    readonly movie: OMDbMovie;
}

const ShowMovie = (props: ShowMovieProps) => (
  <ul>
      {Object.entries(props.movie).map(([infoType, infoVal]) =>
          <li key={`${infoType}-${infoVal}`}>
            {infoType !== 'Poster' && `${infoType}:`}
            {infoType === 'Poster' ? <img src={infoVal} alt={props.movie.Title} /> : infoVal}
          </li>
      )}
  </ul>
);

export default ShowMovie;
