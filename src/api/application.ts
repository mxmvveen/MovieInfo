import axios, { AxiosResponse } from 'axios';
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const getMovieList = (title: string) => {
    const reqeust: string = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    return axios.get(reqeust)
        .then((res: AxiosResponse) => res.data.Search)
        .catch(err => console.log(err));
};