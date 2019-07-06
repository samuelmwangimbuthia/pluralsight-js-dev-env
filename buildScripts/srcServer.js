var express = require ('express'); //call express dependency
var path = require ('path'); //reference to path
var open = require ('open'); //open a site in the browser
var port = 3030; // a variable that stores the port
var app = express (); // create an instance of express and set that to variable app
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});
app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
})