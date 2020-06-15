import axios from 'axios';
import { Movie, SearchMoviesResponse } from '~/typeDefs/OMDb';
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const getMovieList = async (title: string): Promise<Movie[]> => {
    console.log('the real', title);
    const request: string = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    // TODO: check how to catch error
    const response = await axios.get<SearchMoviesResponse>(request);
    if (response) {
       return response.data.Search || [];
    }

    return [];
    // console.log(err);
}