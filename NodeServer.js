const http = require("http");

const server = http.createServer((req, res) => {
    console.log('Suraj')
});

server.listen(4000)