//JSON is an acronym for JavaScript Object Notation
//Nested arrays
var names = [["James", "Pual", "Kenn", "Chris"], ["Morgan", "Julie", "Abbey", "Brie"]];
//console.log(names[0][0])
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags":["home", "green", "vinyl"]
	},
//dont forget the comma

	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	},

	{
		"id": 3,
		"name": "Trevor",
		"last-name": "Mahoney",
	}
]
//console.log(items)
console.log(items[0].id)
console.log(items[0].tags[1]);

//can you create a for loop that console logs each objects name

for(i = 0; i < items.length; i++){
	console.log(items[i].name)
}

//.name calls the name part
//{} are needed
