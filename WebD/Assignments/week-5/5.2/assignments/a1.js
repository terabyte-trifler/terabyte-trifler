const express = require("express");

const app = express();

// logs the method, timestamp and the URL

function middleware(req,res,next){
    console.log("method is " + req.method);
    console.log("Route is " + req.url);
    console.log("Host is" + req.hostname);
    console.log(new Date());

    next();
}

app.use(middleware);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3010);