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
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<NavigationItems></NavigationItems>)
    })

    it('should render two nav items elements if user is not authenticated ', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    // another unit test
    it('should render three nav items elements if user is authenticated ', () => {
        wrapper.setProps({
            isAuthenticated: true
        })
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('should render three nav items elements if user is authenticated ', () => {
        wrapper.setProps({
            isAuthenticated: true
        })
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toHaveLength(3)
    })
})// description of test bundle 