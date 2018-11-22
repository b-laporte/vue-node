import { shallowMount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login.vue', () => {
  it('renders Login', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.find('button').text()).toMatch('Login');
  });
});
