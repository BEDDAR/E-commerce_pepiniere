import axios from 'axios'
export let newEmail=''

export function setNewEmail(emaill){
    newEmail =emaill
}
export async function isEmailExist(email){
    const response = await axios.get(`/connexion/${email}`).then(res => res.data)
    console.log("exist",response)
       return response.isExist
}