import { shallowMount } from '@vue/test-utils';
import RepoList from '../../src/components/RepoList';
import store from '../../src/store'

describe('RepoList', () => {
    it("renders correctly", () => {
        const wrapper = shallowMount(RepoList, { store });
        expect(wrapper).toMatchSnapshot();
    });
});