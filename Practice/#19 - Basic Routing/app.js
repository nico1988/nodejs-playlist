const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    console.log("new request comming:::", req.url);
    if (req.url === '/home' || '/' === req.url) {
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/home.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === 'api/ninjas') {
        var json = {
            name: 'nico',
            age: 31
        }
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        res.end(JSON.stringify(json));
    } else {
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
server.listen(3000,function () {
    console.log('server started::: server is listening on port 3000');
})
