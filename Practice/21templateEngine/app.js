const express = require('express');
const path = require('path');
const server = express();
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.get('/', function (req, res) {
    const data = {
        index: 'this is index page',
        hobbies: ['eating','fitting','fishing']
    }
    res.render('index',{
        data
    });
});
server.get('/contact', function (req, res) {
    res.render('contact');
});

server.get('/profile/:name/:age/:id', function (req, res) {
    const data = {
        hobbies: ['eating','fitting','fishing'],
        name: req.params.name,
        id: req.params.id,
        age: req.params.age
    }
    res.render('profile',{
        data
    });
});
server.get('*', function (req, res) {
    res.send('404');
});
server.listen(3000,function () {
    console.log('server::: server is listening on port 3000');
})

