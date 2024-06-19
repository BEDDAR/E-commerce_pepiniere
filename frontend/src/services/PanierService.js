import axios from './../axios.js'
export let panier=[]

export async function validerPanier(Produits,idClient){
    return await axios.post('/validercommandes',{"Produits":Produits,"idClient":idClient})
}