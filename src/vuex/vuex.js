import Vue from 'vue'
import Vuex from 'vuex'

// Activation de Vuex pour l'utilisation dans Vue
Vue.use(Vuex)

// Définition de l'état initial de l'application
const state = {
    panier: [], // Le panier est initialement vide
};

// Création du store Vuex
let store = new Vuex.Store({
    state: state, // Initialisation de l'état
    getters: {
        // Getter pour accéder au panier depuis l'état
        getPanier: (state) => {
            return state.panier
        }
    },
    actions: {
        // Action pour initialiser le store à partir du localStorage
        initialiseStore({ state }) {
            // Vérifie si le panier existe dans le localStorage
            if (localStorage.getItem('panier')) {
                // Remplace l'objet state par l'élément stocké
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('panier')))
                );
            }
        },
    },
    mutations: {
        // Mutation pour ajouter un produit au panier
        addPanier(state, { produit, quantite }) {
            // Trouve l'index du produit dans le panier
            let indexProduit = state.panier.findIndex(element => element.produit.id === produit.id)

            // Si le produit n'est pas dans le panier, l'ajoute
            if (indexProduit == -1) {
                produit.stock -= quantite // Met à jour le stock du produit
                state.panier.push({ "produit": produit, "quantity": Number(quantite), total: quantite * produit.prix })
            } else {
                // Si le produit est déjà dans le panier, met à jour la quantité, le stock et le total
                state.panier[indexProduit].produit.stock -= quantite
                state.panier[indexProduit].quantity += Number(quantite)
                state.panier[indexProduit].total = state.panier[indexProduit].quantity * produit.prix
            }
        },
        // Mutation pour supprimer un produit du panier
        deletePanier(state, article) {
            // Parcourt le panier et supprime l'article correspondant
            state.panier.forEach((element, i) => {
                if (element.produit.id == article.produit.id) {
                    state.panier.splice(i, 1)
                }
            })
        }
    }
});

// Abonnement au store pour sauvegarder l'état dans le localStorage à chaque mutation
store.subscribe((mutation, state) => {
    // Sauvegarde l'état sous forme de chaîne JSON
    localStorage.setItem('panier', JSON.stringify(state));
});

// Rend le store globalement accessible
global.store = store

// Exporte le store pour l'utiliser dans d'autres parties de l'application
export default store;