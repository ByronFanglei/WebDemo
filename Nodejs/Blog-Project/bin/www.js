const http = require('http')

const PORT = 5050
const serveHandle = require('../app.js')

const serve = http.createServer(serveHandle)
serve.listen(PORT)
console.log(`访问地址：http://localhost:${PORT}`)
