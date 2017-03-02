//var footBallTeam = "Colts" //same as saying   for(i = 0; i < footBallTeam.length; i++)
//for (var char in footBallTeam){ //char is short for character
//	console.log(footBallTeam[char])
//}
//
//// create a for in loop that prints each leeter of your fav show
//var favShow = "Adventure Time"
//for (var char in favShow){
//	console.log(favShow[char])
//}

//create a for in loop for your favorite food
//then can you count each vowel that occurs in that food?
//1. we need a for in loops
//2. use a condititional to check if the letter at an index is a vowel
//3. ? == "a" || "e" || "i" || "o" || "u"
var vowelCount = 0
var favFood = "Stromboli"
console.log(favFood.length)
for (vowel in favFood){
	if (favFood[vowel].toLowerCase() === "a" || favFood[vowel].toLowerCase() === "e" || favFood[vowel].toLowerCase() === "i" || favFood[vowel].toLowerCase() === "o" || favFood[vowel].toLowerCase() === "u"){
		vowelCount++
	}
}
console.log("There are " + vowelCount + " vowels in " + favFood)