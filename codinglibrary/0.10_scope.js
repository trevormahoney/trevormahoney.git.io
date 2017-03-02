//Scopes

var name = "Trevor" //this var is global

function greetings(){
	var name = "Ralph" //make sure you dont forget var
	return "Hello " + name;
}
console.log(greetings())
console.log(name)