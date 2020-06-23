import axios, { AxiosResponse, AxiosError } from 'axios';
import { OMDbSearchMoviesResponse, OMDbMovie } from '~/typeDefs';
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const getMovieList = async (title: string): Promise<OMDbMovie[] | void> => {
    const request: string = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

    const response: AxiosResponse<OMDbSearchMoviesResponse> | void = await axios.get(request)
        .catch((error: AxiosError) => console.log(error));

    if (response === undefined) {
        return;
    }
    return response.data.Search;
};
