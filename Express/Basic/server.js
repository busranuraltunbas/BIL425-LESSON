const express = require("express");

const app = express();

/*app.get("/", (req, res)=>{

    res.send("Hello-Merhaba");
    
})*/

//app.listen(3000, () => console.log("Serrver running"));


/*app.get("/users/:id", (req, res)=>{

    res.sendFile('./views/index.html', {root: __dirname});
    
})*/

app.get("/users/:id", (req, res)=>{

    res.status(200).send(`<h1>Users ID: ${req.param.id}</h1>`);
    
})

app.use(express.json());

const lessons = [
    {id:1, name: 'Fizik'},
    {id:2, name: 'Kimya'},
    {id:3, name: 'Mat'}
]

app.get("/api/lessons", (req, res)=>{

    res.send(lessons);
    
})

app.post("/api/lessons", (req, res)=>{

    const lesson = {
        id: lessons.length + 1,
        name: req.body.name
    }
    lessons.push(lesson);
    res.send(lesson);
})

app.listen(3000, () => console.log("Serrver running"));