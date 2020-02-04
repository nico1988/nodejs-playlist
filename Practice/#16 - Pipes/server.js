const fs = require('fs');
const http = require('http');
const server = http.createServer(function (req, res) {
    const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    console.log('new request::: new request comming',new Date());
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
    myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log('server started::: server is listening on port 3000');
