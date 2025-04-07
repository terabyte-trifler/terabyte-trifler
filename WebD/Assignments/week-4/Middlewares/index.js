const express = require('express');

const app = express();

function isOldEnough(age){
    if(age >= 14)
    {
        return true;
    }
    else
        return false;
}

function isOldEnoughMiddleware(req,res,next){
    if(age >= 14)
    {
        next();
    }
    else{
        res.json({
            msg: "sorry you aren't of age yet"
        })
    }
}

// app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, function(req,res){

    if(isOldEnough(req.query.age)){
        res.json({
            msg: "you have successfully booked a ride"
        })
    }
    else{
        res.status(411).json({
            msg: "Sorry you aren't of age yet"
        })
    }

 })


 app.get("/ride2", isOldEnoughMiddleware, function(req,res){

    if(isOldEnough(req.query.age)){
        res.json({
            msg: "you have successfully booked a ride"
        })
    }
    else{
        res.status(411).json({
            msg: "Sorry you aren't of age yet"
        })
    }

 })
   
   

app.listen(3000);
