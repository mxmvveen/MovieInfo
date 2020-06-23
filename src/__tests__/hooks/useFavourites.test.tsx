import { renderHook, act } from '@testing-library/react-hooks';
import { useFavourites } from '~/hooks';
import { OMDbMovie } from '~/typeDefs';

const movieOne: OMDbMovie = {
  Poster: '',
  Title: 'First Test Movie',
  Type: 'Movie',
  Year: '2020',
  imdbID: 'xxx-xxx-xx'
};
const movieTwo: OMDbMovie = {
  Poster: '',
  Title: 'Second Test Movie',
  Type: 'Movie',
  Year: '2020',
  imdbID: '123-456-78'
};

describe('useFavourites', () => {
    it('should add to favourites', () => {
        const { result } = renderHook(() => useFavourites());
        act(() => result.current.addToFavouriteMovies(movieOne));
        expect(result.current.favouriteMovies).toEqual([movieOne]);
    });

    it('should remove to favourites', () => {
      const { result } = renderHook(() => useFavourites());
      act(() => result.current.addToFavouriteMovies(movieOne));
      act(() => result.current.addToFavouriteMovies(movieTwo));
      expect(result.current.favouriteMovies).toEqual([movieOne, movieTwo]);

      act(() => result.current.removeFromFavourites(movieOne.imdbID));
      expect(result.current.favouriteMovies).toEqual([movieTwo]);
  });
});