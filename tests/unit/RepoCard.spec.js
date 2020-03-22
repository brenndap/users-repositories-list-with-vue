import { shallowMount } from '@vue/test-utils';
import RepoCard from '../../src/components/RepoCard';

describe('RepoCard', () => {
    it("renders correctly", () => {
        const wrapper = shallowMount(RepoCard);
        expect(wrapper).toMatchSnapshot();
      });
});