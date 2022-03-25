const express = require("express");

app = express()

const auth = require("./middle/auth");

const logger = require("./middle/logger");

const errorHandler = require("./middle/errorHandler");

/*app.use((req,res) => {
    console.log("middleware")
    //res.send("middleware");
    next()
})*/



app.get('/', (req, res) => {
    res.send("page is rendering")
});


app.use((req, res, next) => {
    logger(`${req.method} \t${req.url}`, 'log.txt');
    next()
})

app.use(express.static("public"))

app.use(express.urlencoded({extended:false}))
app.use(express.json())


//cors???
const cors = require("cors");
app.use(cors());

app.get('/', auth, (req, res) => {
    res.send("CORS samples")
});

app.get('/test/:id', (req, res, next) => {
    if(req.params.id ==1 ){
        next({
            errorMessage : "Hata"
        })
    }
})

app.use(errorHandler);


/*app.get('/', auth, (req, res) => {
    res.send("page is rendering")
});*/


app.get('/users', 
(req, res) => {
    logger(`${req.method} \t${req.url}`, 'log.txt')
},

(req, res) => {
    res.send("users page is rendering")
});


app.listen(3000, () => console.log("Running..."))