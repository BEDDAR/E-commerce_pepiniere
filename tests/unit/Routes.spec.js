import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import App from '@/App';
import Connexion from '@/views/Connexion/Connexion';

// Créer une instance locale de Vue
const localVue = createLocalVue();

// Utiliser Vue Router avec Vue locale
localVue.use(VueRouter);
localVue.use(Vuex);
const vuetify = new Vuetify();

// Définir les routes
const routes = [
    {
        path: '/connexion',
        name: 'connexion',
        component: Connexion
    }
];

// Créer une instance de Vue Router avec les routes définies
const router = new VueRouter({
    routes,
    mode: 'history' // ou 'hash' si vous préférez
});

// Le test
describe('App', () => {
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

    it('renders a component via routing', async () => {
        // Créer le wrapper du composant App avec Vue Router
        const wrapper = mount(App, {
            store,
            localVue,
            vuetify,
            router
        });

        // Naviguer vers la route souhaitée
        await router.push('/connexion');
        
        // Attendre que la navigation soit terminée
        await new Promise(resolve => router.onReady(resolve));

        // Vérifier si le composant Connexion est rendu
        expect(wrapper.findComponent(Connexion).exists()).toBe(true);
    });
});