import axios from 'axios'
export let panier=[]

export async function validerPanier(Produits,idClient){
    return await axios.post('/validercommandes',{"Produits":Produits,"idClient":idClient})
}