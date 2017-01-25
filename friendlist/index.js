var express = require('express')
var app = express();
var http = require('http').Server(app)

//when we get a req for a static file, respond with that folder and the files 
//in it. 
app.use(express.static(__dirname + '/public'))

//Request on the root route, route is ''
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 3000, function(){
	console.log("port 3000")
})

//to run the server use node index.js