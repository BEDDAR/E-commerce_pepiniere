import axioss from 'axios'

let baseURL;

baseURL = process.env.NODE_ENV==='production'?'http://13.60.51.199:3000/':'http://localhost:3000/'
const axios = axioss.create({
baseURL: baseURL,
})

export default axios