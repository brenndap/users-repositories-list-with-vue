import { shallowMount } from '@vue/test-utils';
import UserProfile from '../../src/components/UserProfile';
import store from '../../src/store'

describe('UserProfile', () => {
    it("renders correctly", () => {
        const wrapper = shallowMount(UserProfile, { store });
        expect(wrapper).toMatchSnapshot();
    });
});