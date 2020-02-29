const app = require('http');
app.createServer((request, response) => {
    response.end("Hello Lakshmi!!!");
}).listen('3000', () => {
    console.log("Connecting to the port !!! ")
});

