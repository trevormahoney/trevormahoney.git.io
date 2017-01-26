/*////if/else
//var elevatorUp = true;
//var elevatorDown = true;
//var elevatorOpen = true;
//var elevatorBroken = true;
//var elevatorStuckAndWeOnIt = true;
//var elevatorNumber = 13;
//if (elevatorUp === true){
//	console.log("Going up")
//}else{
//	console.log("Going down")
//}
//if (elevatorBroken === true){
//	console.log("We aren't going anywhere")
//}else{
//	console.log("Movin' on up")
//}
//if (elevatorStuckAndWeOnIt === true){
//	console.log("I need to go to the bathroom")
//}else{
//	console.log("Nice elevator")
//}
//if (elevatorBroken && elevatorStuckAndWeOnIt){
//	console.log("I hope we get out this thing soon!!!")
//}else{
//	console.log("Smalltalk on the elevator")
//}*/
//--------------------------------------------------------
//--------------------------------------------------------
// ------------Challenges: If/Else Statements ----------
//--------------------------------------------------------
//--------------------------------------------------------

/*-----------------------------------------------------------*/
//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND lOGICAL OPERATORS.
//Come up with a simple example

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"


//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

//Bronze
var matchFoundAndClickedYes = true
if (matchFoundAndClickedYes){
	console.log("Ready for battle")
}else{
	console.log("The Summoner is not ready for battle")
}
//Silver
var username = "TrevorMahoney"
var TrevorMahoney = true
if (TrevorMahoney === true){
	console.log("You're logged in " + username)
}else{
	console.log("Please sign in")
}
//Gold
var bankAccount = 100
var debt = 95
var leftOver = bankAccount-debt
if(bankAccount-debt >= 0){
	console.log("You have no debt with " + leftOver + " to spare")
}else{
	console.log("You will be in debt")
}

