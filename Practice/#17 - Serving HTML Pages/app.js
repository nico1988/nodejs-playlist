const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    readStream.pipe(res);
    console.log('new request comming:::', new Date(), req.url);
});


server.listen(3000, '127.0.0.1');
console.log('server started::: server is listening on port 3000');
