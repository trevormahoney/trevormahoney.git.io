//Empty Object Literal
var emptyObject = {}; //definately end it with a ;

//Object with Properties
var facebookFriend ={
	name			: "Jona",
	age				: 0,
	vocation		: "",
	inRelationship	: true
};

//facebookFriend.name = "Jona"; //the . is an accessor
//console.log(facebookFriend.name);
//
//facebookFriend.age = "40";
//console.log(facebookFriend.age);
//
//console.log(facebookFriend.name + " just turned " + facebookFriend.age + "!  CONGRADULATIONS!!!")
//
//if(facebookFriend.inRelationship = true){
//		console.log(facebookFriend.name + " is in a a relationship");
//	}else{
//		console.log(facebookFriend.name + " is not in a relationship")
//	}
//}

var summoner ={
	username	: "",
	rank		: "",
	gamesplayed	: 0,
};
summoner.username = "kawaiigiggle",
summoner.rank = "Platinum 5",
summoner.gamesplayed = 2000,
item = summoner.username + " is " + summoner.rank + " and has played " + summoner.gamesplayed + " games. "
console.log(item)
