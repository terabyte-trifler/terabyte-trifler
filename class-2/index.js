const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "gurnoor123";

const app = express();

app.use(express.json());

const users = [];

function logger(req,res,next){
    console.log(req.method + "request came");
    next();
}

app.post("/signup", logger, function(req,res){
    const username = req.body.username
    const password = req.body.password

    users.push({
        username : username,
        password: password
    })

    // we should check if a user with this username already exists 

    res.json({
        message: "You are signed in"
    })

})

app.post("/signin", logger, function(req,res){
    const username = req.body.username
    const password = req.body.password

    let foundUser = null;

    for (let i=0; i< users.length;i++)
    {
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i]
        }
    }
    
    if(!foundUser){
        res.json({
            message: "Credentials incorrect"
        })
         return 
    }
    else
    {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.header("jwt", token);

        res.header("random","harkirat");

        res.json({
            token: token
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        next()
    } else
    {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.post("/me", logger, function(req,res){

    /*const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET)

    // const decodedData = jwt.decode(token)  Vulnerability 

    if(decodedData.username) */ 
       let foundUser = null;

       for(let i=0; i<users.length; i++)
       {
        if(users[i].username === decodedData.username)
        {
            foundUser = users[i];
        }
        }

       res.json({
            username: foundUser.username,
            password: foundUser.password
       })
    })







app.listen(3032);