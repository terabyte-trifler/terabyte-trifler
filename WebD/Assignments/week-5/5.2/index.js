const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req,res,next){ /// Like Middleware
    requestCount +=1;
    // req.name = "gurnoor123";

    if(req.headers.cookie === "google"){

    console.log(`Total number of requests = ${requestCount}`);
    next();
    }

    else{
        console.log(`Total number of requests = ${requestCount}`);

        res.json({
            message: "I ended the request early"
        })
    }
}

function realSumHandler(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    // requestIncreaser();

    console.log(req.name);

    res.json({
        ans : a + b
    });
}

app.get("/admin", function(){
    res.json({
        message: "Total number of requests on server is " + requestCount
    })
});

app.use(requestIncreaser); /// all the sum multiply after this will automatically use requestIncreaser()

// app.get("/sum/:a/:b", requestIncreaser, realSumHandler);
app.get("/sum/:a/:b",realSumHandler);
/*app.get("/sum/:a/:b", requestIncreaser, function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    requestIncreaser();

    res.json({
        ans : a + b
    })

}); 

app.get("/multiply",requestIncreaser, function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    requestIncreaser();
    res.json({
        ans : a * b
    })
}); */



app.listen(3009);