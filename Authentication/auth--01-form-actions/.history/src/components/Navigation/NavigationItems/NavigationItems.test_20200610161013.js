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
        expect(wrapper.find())
    })
})// description of test bundle 