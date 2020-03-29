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
app.get("/r/:subredditName",function(req,res){
	console.log(req.params);
	var subreddit = req.params.subredditName;
	
	res.send("Welcome to the "+ subreddit.toUpperCase() +" page.");
});
app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
	res.send("welcome to comments");
});

app.get("*",function(req, res){
	res.send("You are a star");
});
app.listen(3000,function(){
	console.log("Serving demo ");
})