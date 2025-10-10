const express = require(express);

const app = express();

const users = [{
    name: "John",

    kidneys: [{
        healthy: false
    }]

}];

app.get("\", function(req,res){
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);
})

app.listen(3001);