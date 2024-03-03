import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import vuetify from '../../vuetify';
import Rosier from '@/views/Produits/Rosiers/Rosiers.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter);
const routes = [
];

const router = new VueRouter({
  routes
});

localVue.use(Vuex)

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('Connexion', () => {
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

  it('Rosier est monté correctement',async () => {
    const wrapper = mount(Rosier, { store, localVue,router,vuetify });
    expect(wrapper.exists()).toBe(true);
  });
});