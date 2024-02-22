import axios from 'axios'

export let articlesFiltered

export function setArticlesFiltered(produits) {
    articlesFiltered = produits
}

export async function getProduits() {
    return await axios.get('/allProduits').then(response => response.data)
}

export async function getTulipes() {
    return await axios.get('/allTulipes').then(response => response.data)
}

export async function getRosiers() {
    return await axios.get('/allRosiers').then(response => response.data)
}

export async function getFruits() {
    return await axios.get('/allFruits').then(response => response.data)
}

export async function getPotager() {
    return await axios.get('/potager').then(response => response.data)
}

export async function getMateriel() {
    return await axios.get('/materiel').then(response => response.data)
}

export async function getSoins() {
    return await axios.get('/soins').then(response => response.data)
}

export async function updateStock(pId, pStock) {
    return await axios.post('/updatestock', { id: pId, stock: pStock })
}

export async function getAvis(produit_id) {
    return await axios.get(`/getavis/${produit_id}`)
}

export async function addAvis(idUser, idArticle, note, commentaire) {
    return await axios.post('/addavis', { idUser, idArticle, note, commentaire })
}