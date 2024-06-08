const app = require('./app')
const port = 3000;
const logger = require('./../src/traces/logger.js')

app.listen(port, () =>{
    logger.info(`Server is running on port ${port}`)
    console.log(`Server started on port ${port}`)})