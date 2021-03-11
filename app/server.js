const http = require('http');

const server = http.createServer(require('./src/app'));
const port = process.env.PORT || 3000;

server.listen(port);

server.on('listening', () => console.log(
    `Server on port: ${port}`)
);
server.on('error', (err) => { console.error(err)});
