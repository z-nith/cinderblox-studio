import React from 'react';
import { BaseLink } from 'atoms';
import { mount } from 'enzyme';
import { mockNextUseRouter } from '../mocks';

describe(`Link`, () => {
    // Mocks Next.js route
    mockNextUseRouter({
        route: '/',
        pathname: '/',
        query: '',
        asPath: `/`,
    });

    it(`should render without error`, () => {
        const wrapper = mount(<BaseLink href={'/'}>Hello</BaseLink>);
        expect(wrapper).toMatchSnapshot();
    });
});
