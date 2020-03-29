var express = require("express");
var app = express();

app.get("/",function(req, res){
	console.log("Someone made a request to /");
	res.send("Hi there, welocome to motorcycles page");
});

app.get("/speak/:bike",function(req,res){
	var sounds = {
		duke: "braap",
		bullet: "dugdug",
		rx: "trreem"
		
	}
	var bike = req.params.bike;
	var sound = sounds[bike];
	res.send("The "+bike+" makes "+sound+" sound.");

});
app.get("/repeat/:subredditName1/:subredditName2", function(req,res){
	var subreddit1 = Number(req.params.subredditName1);
	var subreddit2 = req.params.subredditName2;
	var result="";
	for(var i=0;i<subreddit1;i++)
		{
			result += subreddit2;
		}
	res.send(result);
});

app.get("*",function(req, res){
	res.send("You are a star");
});


app.listen(3000,function(){
	console.log("Serving demo ");
});