import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Navbar from '@/components/Navbar/Navbar.vue';
import Home from '@/views/Home.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
];

const router = new VueRouter({
  routes
});
const vuetify = new Vuetify(); 

localVue.use(Vuex)

describe('Navbar', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      getPanier: jest.fn()
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('est monté correctement', () => {
    const wrapper = mount(Navbar, { store, localVue,router,vuetify });
    expect(wrapper.exists()).toBe(true);
  });
});
