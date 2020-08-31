import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'
// to connect adapter
configure({
    adapter: new Adapter()
})
describe('<Navigation Items/>', () => {
    it('should render two nav items elements if user is not authenticated ', () => {
        const wrapper = shallow(<NavigationItems></NavigationItems>)
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    // another unit test
    it('should render three nav items elements if user is authenticated ', () => {
        const wrapper = shallow(<NavigationItems isAuthenticated></NavigationItems>)
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
})// description of test bundle 