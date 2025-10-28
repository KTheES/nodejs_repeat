const express = require('express');
const app = express();
const path = require('path');   

app.set("view engine", "ejs");
// app.engine('html', require('ejs').renderFile);
app.set("views", path.join(__dirname,'..','views'));
app.use(express.static(path.join(__dirname,'public')));


app.get('/', function(req,res){
    res.render("study01",{});

});

app.get('/home', function(req,res) {
    res.render("study02",{});

})

app.listen(3000, () => {
    console.log("running on localhost:3000")
});