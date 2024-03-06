import { mount, createLocalVue } from '@vue/test-utils';
import Panier from '@/views/Panier/Panier.vue';
import VueRouter from 'vue-router';
import vuetify from '../../vuetify';
import {data} from './data'
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

describe('Panier', () => {
    let getters
    let actions
    let store
    let mutations

    beforeEach(() => {
        getters = {
            getPanier: jest.fn(()=>{
                return [{produit:data,quantity:0,total:0}]
            })
        }
        actions = {
            initialiseStore: jest.fn()
        }
        mutations = {
            addPanier: jest.fn(),
            deletePanier: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            actions,
            mutations
        })
    })
        
  it('Panier est monté correctement',async () => {
    const wrapper = mount(Panier, { localVue,store,vuetify,router });
    expect(wrapper.exists()).toBe(true);
  });
});