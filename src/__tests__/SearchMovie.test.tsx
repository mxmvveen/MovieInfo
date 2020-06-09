import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SearchMovie, { SearchMovieProps } from '~/components/SearchMovie';
import { moveListMockResponse } from '~/__mocks__/application';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('SearchMovie component', () => {
    const props: SearchMovieProps = {
        movieTitle: 'Title',
        onDeleteFromHistory: jest.fn(),
        onMovieTitleChange: jest.fn(),
        onSearchMovie: (title?: string) => {},
        searchHistory: [],
        setMovieToShow: jest.fn()
    };

    it('should search movies', () => {
        const onSearchMovie: jasmine.Spy = jasmine.createSpy('setMovieToShow');
        const wrapper: Enzyme.ShallowWrapper = shallow(<SearchMovie {...props} onSearchMovie={onSearchMovie} />);
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        expect(onSearchMovie).toHaveBeenCalled();
    });

    it('should show movies', () => {
        const wrapper: Enzyme.ShallowWrapper = shallow(<SearchMovie {...props} movieList={moveListMockResponse.Search} />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('should show movie details after clicking', () => {
        const setMovieToShow: jasmine.Spy = jasmine.createSpy('setMovieToShow');
        const wrapper: Enzyme.ShallowWrapper = shallow(<SearchMovie
                                                            {...props}
                                                            movieList={moveListMockResponse.Search}
                                                            setMovieToShow={setMovieToShow}
                                                        />);
        const listItem: Enzyme.ShallowWrapper = wrapper.find('li');
        listItem.first().simulate('click', moveListMockResponse.Search[0]);
        expect(setMovieToShow).toHaveBeenCalled();
    });
});
