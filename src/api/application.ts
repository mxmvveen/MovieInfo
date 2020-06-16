import axios, { AxiosResponse, AxiosError } from 'axios';
import { OMDbSearchMoviesResponse, OMDbMovie } from '~/typeDefs/OMDb';
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const getMovieList = (title: string): Promise<OMDbMovie[] | void> => {
    const request: string = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

    return axios.get(request)
        .then((response: AxiosResponse<OMDbSearchMoviesResponse>) => response.data.Search)
        .catch((error: AxiosError) => console.log(error));
};