import { mount, createLocalVue } from '@vue/test-utils';
import vuetify from '../../vuetify';
import VueRouter from 'vue-router';
import Contact from '@/views/Contact/Contact.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter);
const routes = [
];

const router = new VueRouter({
  routes
});
describe('Contact', () => {
   
    let getters
    let actions
    let store
    let mutations

    beforeEach(() => {
        getters = {
            getPanier: jest.fn()
        }
        actions = {
            initialiseStore: jest.fn()
        }
        mutations = {
            addPanie: jest.fn(),
            deletePanier: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            actions,
            mutations
        })
    })
        
  it('Contact est monté correctement',async () => {
    const wrapper = mount(Contact, {  localVue,vuetify,store,router});
    expect(wrapper.exists()).toBe(true);
  });
});