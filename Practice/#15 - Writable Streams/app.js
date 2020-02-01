const fs = require('fs');
const myUtfReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');
const myUtfWriteStream = fs.createWriteStream(__dirname + '/writedMe.txt');

myUtfReadStream.on('data', (chunk) => {
    console.log('utf8 data:::', 'utf8 data received');
    myUtfWriteStream.write(chunk);
}).on('close', () => {
    console.log("readFile end:::")
});
