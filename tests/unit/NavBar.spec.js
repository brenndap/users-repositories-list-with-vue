import { shallowMount } from '@vue/test-utils';
import NavBar from '../../src/components/NavBar';
import store from '../../src/store'

describe('NavBar', () => {

    it("renders correctly", () => {
        const wrapper = shallowMount(NavBar, { store });
        expect(wrapper).toMatchSnapshot();
    });

});