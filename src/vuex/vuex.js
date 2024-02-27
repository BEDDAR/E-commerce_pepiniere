import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const state = {
    panier: []
};

let store = new Vuex.Store({
    state: state,
    getters: {
        getPanier: (state) => {
            return state.panier
        }
    },
    actions: {
        initialiseStore({ state, }) {
            // Check if the ID exists
            if (localStorage.getItem('panier')) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('panier')))
                );
            }
        },
    },
    mutations: {
        
        addPanier(state, { produit, quantite }) {
            let indexProduit = state.panier.findIndex(element => element.produit.id === produit.id)
            if (indexProduit == -1) {
                produit.stock-=quantite
                state.panier.push({ "produit": produit, "quantity": Number(quantite), total: quantite * produit.prix })
            } else {
                state.panier[indexProduit].produit.stock -= quantite
                state.panier[indexProduit].quantity += Number(quantite)
                state.panier[indexProduit].total = state.panier[indexProduit].quantity * produit.prix
            }
        },
        deletePanier(state,article){
            state.panier.forEach((element,i) => {
                if( element.produit.id == article.produit.id){
                    state.panier.splice(i,1)
                }
             })
        }

    }
});

store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem('panier', JSON.stringify(state));
});

global.store = store
export default store;

