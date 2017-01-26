var tired = false;
var hungry = true;
// = assigns information into a variable
// == evaluates values (returns true or false)
// === evaluates values and type of variable
var isTrue  = 1 == "1"; //this is true
console.log(isTrue)
var isTrue = 1 === "1"; // === also evaluates type
console.log(isTrue)
var numThree = 3
var strThree = "3"
var checkTrue = numThree == strThree
console.log(typeof numThree)
console.log(typeof strThree)
console.log(checkTrue)
var num1 = 35
var num2 = 34
//! is the band symbol
console.log( num1 != num2)
var foo = true
console.log(!foo)
//--------------------------------------------------------
//--------------------------------------------------------
// ------ Challenge: Boolean Logic  ----------
//--------------------------------------------------------
//--------------------------------------------------------
/*---------------------------------------------------------*/


/*CHALLENGE: Bronze
Create 5 boolean variables that would be used in everyday programming
Using the boolean variables created above integrate logical and comparison operators to return true and false statements in the console.
*/

/*CHALLENGE: Silver
Write your own conditional that deals with Boolean Operators and Boolean Logic. Get as complicated as you want, just make sure it runs. Sign up for an account on Repl.io. Add the code there and send it to James, Paul, and Kenn. You can do that on Slack by using the @ symbol for all of us.
*/

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/
////Bronze
//var num1 = 38
//var num2 = 11
//var num3 = 98
//var num4 = 1
//var num5 = 1000
//console.log(num1 < num4)
//console.log(num3 <! num5)
//Silver
var age = 21
if(age >= 35){
	console.log("You can run for president, senate, house of representatives!")
}else if(age >= 30){
	console.log("You can run for senate, and house of representatives!")
}else if(age >= 25){
	console.log("You can run for house of representatives!")
}else{
	console.log("You are not old enough to govern.")
}
