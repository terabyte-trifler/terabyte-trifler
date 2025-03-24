const express = require('express')
const app = express()

app.get('/', function (req, res) { /// request is for adding a body part if required and respond is for res; u have to send somethign abck for the response
  res.send('Hello World')
})

app.get('/sss', function (req, res) { /// request is for adding a body part if required and respond is for res; u have to send somethign abck for the response
    res.json({
        name:"Gurnoor"
    })
  })   
  


app.get('/asd', function (req, res) {
    res.send('Hello From the asd end point') /// if u try to send this kmore than once it will give u errorz
  })

app.listen(3002)