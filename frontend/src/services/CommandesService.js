import axios from 'axios'

export async function getCommandes(idUser){
    return await axios.get(`/mescommandes/${idUser}`).then(respose=>respose.data)
}