import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Movie from '~/components/Movie';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('Movie component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Movie />);
        expect(wrapper).toBeTruthy();
    });
});
