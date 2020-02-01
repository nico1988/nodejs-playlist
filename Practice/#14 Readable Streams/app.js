const fs = require('fs');
const myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
const myUtfReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');

myReadStream.on('data', function (chunk) {
    console.log('chunk data:::', chunk);
});
myUtfReadStream.on('data', () => {
    // console.log('utf8 data:::', chunk);
});
