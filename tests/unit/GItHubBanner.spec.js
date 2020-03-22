
import { shallowMount } from '@vue/test-utils';
import GitHubBanner from '../../src/components/GitHubBanner';

describe('GitHubBanner', () => {
    it("renders correctly", () => {
        const wrapper = shallowMount(GitHubBanner);
        expect(wrapper).toMatchSnapshot();
      });
});