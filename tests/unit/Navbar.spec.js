// Importation des méthodes mount et createLocalVue depuis '@vue/test-utils' pour le montage des composants Vue dans les tests
import { mount, createLocalVue } from '@vue/test-utils';
// Importation de VueRouter pour la gestion des routes Vue
import VueRouter from 'vue-router';
// Importation du framework Vuetify pour les tests
import vuetify from '../../vuetify';
// Importation du composant Navbar à tester
import Navbar from '@/components/Navbar/Navbar.vue';
// Importation de Vuex pour la gestion de l'état global de l'application Vue
import Vuex from 'vuex'

// Création d'une instance locale de Vue pour les tests
const localVue = createLocalVue()
// Utilisation de VueRouter dans l'instance locale de Vue
localVue.use(VueRouter);
// Définition des routes Vue (vide dans cet exemple)
const routes = [];

// Création d'une instance de VueRouter avec les routes définies
const router = new VueRouter({
  routes
});

// Utilisation de Vuex dans l'instance locale de Vue
localVue.use(Vuex)

// Bloc de tests pour le composant Navbar
describe('Navbar', () => {
  let getters // Déclaration d'une variable pour les getters Vuex
  let store   // Déclaration d'une variable pour le store Vuex

  // Avant chaque test, réinitialisation des getters et création d'un nouveau store Vuex
  beforeEach(() => {
    getters = {
      getPanier: jest.fn() // Définition d'un mock pour le getter getPanier
    }
    store = new Vuex.Store({
      getters // Injection des getters dans le store Vuex
    })
  })

  // Test pour vérifier que le composant Navbar est monté correctement
  it('Navbar est monté correctement', () => {
    // Montage du composant Navbar avec les options spécifiées
    const wrapper = mount(Navbar, { store, localVue, router, vuetify });
    // Vérification que le composant Navbar existe dans le wrapper
    expect(wrapper.exists()).toBe(true);
  });
});