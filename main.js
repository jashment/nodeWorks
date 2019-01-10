const http = require('http')
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.write('<html>')
    response.write('<head><title>Testing my Server</title></head>')
    response.write('<body><h1>Welcome to my server.</h1></body>')
    response.write('</html>')
    return response.end()
})

server.listen(3000)