import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import vuetify from '../../vuetify';
import FicheArticle from '@/views/FicheArticle/FicheArticle.vue';
import {data} from './data'
import Vuex from 'vuex'
import axios from 'axios'

const localVue = createLocalVue()
localVue.use(VueRouter);
const routes = [
];

const router = new VueRouter({
  routes
});

localVue.use(Vuex)

jest.mock('axios')

describe('FicheArticle', () => {
    let getters
    let actions
    let store
    let mutations

    beforeEach(() => {
        axios.mockClear()
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

  it('FicheArticle est monté correctement',async () => {

    axios.get.mockResolvedValue({data:data})
    
    const wrapper = mount(FicheArticle, {data() {return {article: data};}, store, localVue,router,vuetify });
    expect(wrapper.exists()).toBe(true);
  });
});