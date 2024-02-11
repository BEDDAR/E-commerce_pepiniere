import axios from 'axios'
export let panier=[]

export async function validerPanier(idProduit,prix,quantite,total,idClient){
    return await axios.post('/validercommandes',{idProduit,prix,quantite,total,idClient})
}