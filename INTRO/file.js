//const path = require('fs');
//fs.mkdirSync(path.resolve(__dirname, "dir"));

const { rejects } = require("assert");
const fs = require("file");
const { resolve } = require("path/posix");
//const path = require("path/posix");

//fs.mkdir(path.resolve(__dirname, "dir"), )...

//fs. rmdir(path.resolve(__dirname, "dir"), (err)=> {

//})

fs.writeFile(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 3', (err)=>{
    if(err){
        console.log(err);
    }
}) 


fs.appendFile(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 3', (err)=>{
    if(err){
        console.log(err);
    }
}) 


//promise

const writeFileAsync = async (path, data) =>{
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err)=> {
        if (err){
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) =>{
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err)=> {
        if (err){
            return reject(err.message)
        }
        resolve()
    }))
}


////????????
//writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data') 
//.then() => appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Merhaba'))
//.catch(err => console.log(err))

