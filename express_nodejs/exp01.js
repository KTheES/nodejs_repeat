const express = require('express');
const app = express();

app.get('/home',function(req, res){
    res.send("hello world");
    res.send("it's /home, nodejs with express module");

});

app.get('/', function(req,res){

    res.send("hi it's root");

});

app.listen(3000,() => console.log("running on localhost:3000"));