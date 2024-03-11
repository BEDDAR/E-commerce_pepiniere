import { mount, createLocalVue } from '@vue/test-utils';
import vuetify from '../../vuetify';
import Home from '@/views/Home.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'


const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter);
const routes = [
];

const router = new VueRouter({
    routes
});

describe('Home', () => {
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
            addPanier: jest.fn(),
            deletePanier: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            actions,
            mutations
        })
    })

    it('Home est monté correctement', async () => {
        const wrapper = mount(Home, { localVue, vuetify, store, router });
        expect(wrapper.exists()).toBe(true);
    });
});