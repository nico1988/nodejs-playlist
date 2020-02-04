const express = require('express');
const server = express();
server.get('/', function (req, res) {
    res.send('this is homepage');
    console.log(req.params);
});
server.get('/contact', function (req, res) {
    res.send('this is contact page');
});
server.get('/profile/:id', function (req, res) {
    console.log('id:::', req.params.id);
    res.send(`this is profile page, with the id of ${req.params.id}`);

});
server.get('*', function (req, res) {
    res.send('404');
});
server.listen(3000,function () {
    console.log('server::: server is listening on port 3000');
})
