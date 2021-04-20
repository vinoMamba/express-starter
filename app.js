const express = require('express')
const app = express()

app.get('/xxx', (request, response) => {
    response.send('你好')
})

app.listen(3000, () => {
    console.log('Express app listening on port 3000')
})