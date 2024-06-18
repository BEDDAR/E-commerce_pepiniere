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
