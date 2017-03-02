var firstname="Trevor Mahoney";
var message = firstname + ": " + 21;
var num = 21;
console.log(typeof message);
console.log(typeof num);
//quotes?
var greetings = 'Trevor says "How\'s your day?"';
console.log(typeof greetings);
//string methods
console.log(greetings.length);
console.log(greetings.toUpperCase());//extra parenthesis are nessicary
console.log(greetings.toLowerCase());
console.log(greetings.split(" "));
console.log(greetings.slice(1))
//--------------------------------------------------------
//--------------------------------------------------------
// --------------  Challenge: Strings-------------
//--------------------------------------------------------
//--------------------------------------------------------

//Challenge: Bronze
//Write a string that has two variables. Output should be something like this: 
//I graduated from TooCoolForSchool High School in 1994.

//Challenge: Silver
//Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”

//Challenge: Gold
//Create a variable called age. Give the age a value.
//Use a conditional to check the age.
//If the age is 18, console.log('You are an adult');
//If the age is less than 18, console.log('You are a minor');
//Bronze
var league = "Plat 5";
var myName = "Trevor Mahoney";
console.log(myName +" is " + league +" in League of Legends.");
//Silver
var brand = "Subaru ";
var ageOfCar = "2005 ";
var typeOfSubaru = "Forester ";
console.log(myName + "drives a " +ageOfCar+brand+typeOfSubaru + "and he loves it.")
//Gold
var myAge = 21
if (myAge>=18){
	console.log("You are an adult.")
} else {
	console.log("You a minor.")
}
