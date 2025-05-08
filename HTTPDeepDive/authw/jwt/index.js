const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const JWT_SECRET = "randomgurnoorilovekiara";
const users = [];

app.use(express.json());

function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    let token = "";

    for(let i=0; i<32; i++){
        token += options[Math.floor(Math.random()*options.length)];
    }
    return token;
}


function signUpHandler(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)){

        res.json({
            message: "You are already signedup"
        })
        return;
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you are signed in"
    })

    console.log(users);
}

function signInHandler(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0; i<users.length;i++){
        if(users[i].username == username && users[i].password == password)
        {
            foundUser = users[i]
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);  /// convert their username to jwt

        foundUser.token = token;

        res.json({
            token: token
        })
    }
        else
        {
            res.status(403).send({
                message: "Invalid username or password"
            })
        }
        console.log(users);
}

app.post("/signup",signUpHandler)

app.post("/signin",signInHandler)


app.get("/me", (req,res) => {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username;

    let foundUser = null;

    for(let i=0; i< users.length;i++){
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if(foundUser)
    {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else
    {
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3022);