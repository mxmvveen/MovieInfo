import axios from 'axios';
const apiKey: string = 'e5b30412';

export const getMovieList = (title: string) => {
    const reqeust: string = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    return axios.get(reqeust)
        .then(res => res.data.Search)
        .catch(err => console.log(err));
};