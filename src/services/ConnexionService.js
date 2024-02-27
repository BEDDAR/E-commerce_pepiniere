import axios from 'axios'
export let newEmail=''
export let user =''

export function getUser(){
    return user
}

export function isLoggedIn() {
    return !!user
}

export function setUser(pUser) {
    user = pUser
}

export function setNewEmail(emaill){
    newEmail =emaill
}

export async function enregistrementClient(client){
   return await axios.post('/ajoutClient',client).then(res=>res.data)
}
export async function isEmailExist(email){
    const response = await axios.get(`/connexion/${email}`).then(res => res.data)
    console.log("exist",response)
       return response.isExist
}