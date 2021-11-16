var connect = require('connect');
var serveStatic = require('serve-static');

const host = 'localhost';
const port = 8000;


connect().use(serveStatic(__dirname)).listen(port, host, function () {
    console.log('Servidor lindão rodando!');
    console.log(`Server is running on http://${host}:${port}`);
});