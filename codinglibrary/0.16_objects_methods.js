//OBJECT LITERALS WITH METHODS
//Functions inside of an object.

var player = {
	//Properties
	name		: "",
	lifepoints	: 100,
	damage		: 0,

	//Methods
	challenge	: function(){
		console.log(this.name + ": " + "Would anyone care to fight?????") //type this.name to get the log to say the name
	},
	response	: function(){
		console.log(this.name + ": " + "I'll take your bluff!")
	},
	attack 		: function(Object){
		console.log(this.name + " throws the fist at " + Object + " and does " + this.damage + " damage!")
	}
}
var melkor = Object.create(player); //Object NEEDS to be capitalized
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley";
//Access methods
melkor.challenge();
miley.challenge(); // takes miley name and assigns it to the challenge
miley.response();
melkor.attack(miley.name);