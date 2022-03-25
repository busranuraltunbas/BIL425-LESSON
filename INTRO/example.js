const { write, writeFileSync, appendFile } = require("fs")
const path = require("path/posix")

const text = "BIL 4 2 5"

/*fs = require('fs');
fs.writeFile('helloworld.txt', text, function (err) {
  if (err) return console.log(err);
  console.log("Yazıldı");
});*/

//writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data') 
//.then() => appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Merhaba'))
//.then() => appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Merhaba'))
//.then() => appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Merhaba'))
//.catch(err => console.log(err))


writeFileAsync(path.resolve(__dirname, "text.txt"), text)
    .then() =>  readFileAsync(path.resolve(__dirname, 'text.txt'))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, "count.txt"), count))


    const fsPromise = require('fs').promises;
    const fileRead = async () => {
        try {
            await fsPromise.writeFile(path.resolve(__dirname, 'text.txt'))
        } catch (error) {
            
        }
    }
    






