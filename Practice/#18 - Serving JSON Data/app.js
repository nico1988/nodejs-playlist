const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('new request comming:::', new Date(), req.url);
    const json = {
        name: 'nico',
        age: 31,
        job: 'software engineer'
    }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(json)); // end方法只接受string或者buffer
});


server.listen(3000, '127.0.0.1');
console.log('server started::: server is listening on port 3000');
