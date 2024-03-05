import { mount, createLocalVue } from '@vue/test-utils';
import Commandes from '@/views/Commandes/Commandes.vue';

const localVue = createLocalVue()


describe('Commandes.vue', () => {
    
        
  it('Commandes est monté correctement',async () => {
    const wrapper = mount(Commandes, {  localVue });
    expect(wrapper.exists()).toBe(true);
  });
});