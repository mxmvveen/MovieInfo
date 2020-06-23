import { renderHook, act } from '@testing-library/react-hooks';
import { useMovies } from '~/hooks';
import * as Application from '~/api/application';
import { OMDbMovie, OMDbSearchMoviesResponse } from '~/typeDefs';


const movieListMockResponse: OMDbSearchMoviesResponse = {
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

describe('useMovies', () => {
    it('should search a movie', async () => {
        const { result } = renderHook(() => useMovies());
        await act(async () => {
            const getMovieListSpy: jest.SpyInstance<Promise<OMDbMovie[] | void>, [string]> = jest.spyOn(Application, 'getMovieList');
            getMovieListSpy.mockResolvedValue(movieListMockResponse.Search);
    
            await result.current.onSearchMovie('test');
            expect(movieListMockResponse.Search).toEqual(movieListMockResponse.Search);
        });
    });

    it('should save search query in search history', async () => {
        const { result } = renderHook(() => useMovies());
        await act(async () => {
            await result.current.onSearchMovie('test');
            expect(result.current.searchHistory).toEqual(['test']);
        });
    });

    it('should delete item from search history', async () => {
        const { result } = renderHook(() => useMovies());
        await act(async () => {
            await result.current.onSearchMovie('test');
            await result.current.onSearchMovie('another test');
            expect(result.current.searchHistory).toEqual(['test', 'another test']);

            result.current.deleteFromHistory('test');

            expect(result.current.searchHistory).toEqual(['another test']);
        });
    });
});