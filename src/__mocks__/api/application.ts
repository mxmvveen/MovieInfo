import { OMDbSearchMoviesResponse } from '~/typeDefs';

export const moveListMockResponse: OMDbSearchMoviesResponse = {
    Search: [{
        Title: 'test',
        Year: '2012',
        imdbID: '1212',
        Poster: 'img.img',
        Type: 'Comedy'
    }, {
        Title: 'test two',
        Year: '2012',
        imdbID: '1212',
        Poster: 'img.img',
        Type: 'Comedy'
    }, {
        Title: 'test three',
        Year: '2012',
        imdbID: '1212',
        Poster: 'img.img',
        Type: 'Comedy'
    }],
    Response: 'test',
    totalResults: 'test'
};