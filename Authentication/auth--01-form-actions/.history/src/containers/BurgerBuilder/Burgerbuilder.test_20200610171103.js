import { BurgerBuilder } from './BurgerBuilder';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls'
configure({
    adapter: new Adapter()
})
describe('<BurgerBuilder/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow()
    })
    it()
})