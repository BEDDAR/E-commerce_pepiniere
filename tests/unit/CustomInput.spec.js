import { mount, createLocalVue } from '@vue/test-utils';
import CustomInput from '@/components/CustomInput.vue';

const localVue = createLocalVue()


describe('CustomInput', () => {
    
        
  it('CustomInput est monté correctement',async () => {
    const wrapper = mount(CustomInput, {  localVue, });
    expect(wrapper.exists()).toBe(true);
  });
});