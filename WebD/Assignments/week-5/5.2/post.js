const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

app.post("/sum", function(req,res){

// in Express, if u want to send JSON data,
// you need to first parse the json data



    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b,
    });
});

app.listen(3011);