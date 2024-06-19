import axios from './../axios.js'

export async function getCommandes(idUser){
    return await axios.get(`/mescommandes/${idUser}`).then(respose=>respose.data)
}