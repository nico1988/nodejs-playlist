const express = require('express');
const path = require('path');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/**
 * 中间件
 * 只要满足这个条件，就会触发回调函数 调用next 走入下一个匹配的函数 洋葱模型
 * 两种写法 顺序都可以 ！！！ 注重性能的项目，还是让专业的nginx做转发好一点
 * 第一种全局
 * 第二种针对某一个
 */
app.use(express.static('assets'));
app.use('/public', express.static('./public'));

// app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log('middleware:::', new Date());
    next();
});

app.get('/', function (req, res) {
    console.log('home:::');
    console.log('query:::', req.query);
    const data = {
        index: 'this is index page',
        hobbies: ['eating','fitting','fishing']
    }
    res.render('index',{
        data
    });
});

app.get('/contact', function (req, res) {
    console.log('contact query:::', req.query);
    res.render('contact',{
        qs: req.query
    });
});

app.get('/profile/:name/:age/:id', function (req, res) {
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
// app.get('*', function (req, res) {
//     res.send('404');
// });
const port = 3001;
app.listen(port, function () {
    console.log(`app::: app is listening on port ${port}`);
});

