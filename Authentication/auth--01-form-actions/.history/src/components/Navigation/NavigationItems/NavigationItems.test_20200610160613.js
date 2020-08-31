import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// to connect adapter
configure({
    adapter: new Adapter()
})
describe('<Navigation Items/>', () => {
    it('should render two nav items elements if user is not authenticated ', () => {
        const wrapper = shallow()
    })
})// description of test bundle 