import { OMBdSearchMoviesResult } from "~/typeDefs";

export const moveListMockResponse: OMBdSearchMoviesResult = {
    Search: [{
        Title: 'test',
        Year: '2012',
        imdbID: '1212',
        poster: 'img.img',
        type: 'Comedy'
    }, {
        Title: 'test two',
        Year: '2012',
        imdbID: '1212',
        poster: 'img.img',
        type: 'Comedy'
    }, {
        Title: 'test three',
        Year: '2012',
        imdbID: '1212',
        poster: 'img.img',
        type: 'Comedy'
    }],
    Response: 'test',
    totalResults: 'test'
};

export const getMovieList = (title: string): Promise<OMBdSearchMoviesResult> => {
    return Promise.resolve(moveListMockResponse)}