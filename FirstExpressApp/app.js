var express = require("express");
var app = express();

app.get("/",function(req, res){
	console.log("Someone made a request to /");
	res.send("Hi there");
});
app.get("/bye",function(req, res){
	console.log("Someone made a request to /bye");
	res.send("bye");
});
app.listen(3000,function(){
	console.log("Serving demo ");
})