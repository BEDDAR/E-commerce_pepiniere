import axioss from 'axios'

let baseURL;

baseURL = process.env.NODE_ENV==='production'?'https://ec2-51-20-32-174.eu-north-1.compute.amazonaws.com/':'http://localhost:3000/'
const axios = axioss.create({
baseURL: baseURL,
})

export default axios