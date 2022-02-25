
const path = require('path');
console.log(path.join('first', 'second'));
console.log(path.join(__dirname, '..'));
console.log(path.resolve('/first', 'second'));

///dosya adları için 
const fullpath = path.resolve("first.jpeg");
console.log(path.basename(fullpath));
console.log(path.extname(fullpath));

const pageURL = "http://localhost:9001/user?id=400"
const url = new URL(pageURL)
console.log(url);



