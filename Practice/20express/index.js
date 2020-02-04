const express = require('express');
const server = express();
server.get('/', function (req, res) {
    res.send('this is homepage');
});
server.get('/contact', function (req, res) {
    res.send('this is contact page');
});
server.get('*', function (req, res) {
    res.send('404');
});
server.listen(3000,function () {
    console.log('server::: server is listening on port 3000');
})
