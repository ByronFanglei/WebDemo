const http = require('http')
const serveHandle = require('../app.js')

const PORT = 5050

const serve = http.createServer(serveHandle)
serve.listen(PORT)
console.log(`访问地址：http://localhost:${PORT}`)
