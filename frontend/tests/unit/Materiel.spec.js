import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import vuetify from '../../vuetify';
import Materiel from '@/views/Produits/Materiel/Materiel.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter);
const routes = [
];

const router = new VueRouter({
  routes
});

localVue.use(Vuex)


describe('Materiel', () => {
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

  it('Materiel est monté correctement',async () => {
    const wrapper = mount(Materiel, { store, localVue,router,vuetify });
    expect(wrapper.exists()).toBe(true);
  });
});
