//var age = 15
//if (age >= 21 && age <= 25){
//	console.log("You can drink")
//}else if (age >= 18 && age <= 21){
//	console.log("You can vote")
//}else if (age >= 25){
//	console.log("You can rent a car")
//}else{
//	console.log("You can do anything")
//} 
//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"

//CHALLENGE: SILVER
///*
//Create an if statement that has several conditions.
// Pretend that we will play four total games next year against the patriots.
// Deal with the Patriots record versus our record In other words, if our record was better, 
// talk some smack. If not, you should still talk some smack, but in 
// a different way. If the records were the same, talk some smack. 
// 
// */
//
//CHALLENGE: GOLD
//
//1. Write a program that prompts your users in the browser to enter a
//number from 1 to 5 about how optimistic they are about the Colts next year.
//2. Have a different response for each number.
//
//*HINT*
// you have to build this in relp.it 
//Research prompt
 //Bronze //try nesting
var isLoggedIn = true
var isAdmin = true
var isManager = true
var isEmployee = true
if(isLoggedIn && isAdmin){
	console.log("This is the dashboard for your employee records you have master control")
} else if(isLoggedIn && isManager){
	console.log("This is the dashboard for your employee records, you can only read but not create users")
} else if(isLoggedIn && isEmployee){
	console.log("clock in and clockout please")
} else {
  console.log("You're Logged In!")
}
//Silver
var colts = 3
var patriots = 1
if(colts > patriots){
	console.log("COLTS COLTS COLTS!")
} else if(colts < patriots){
	console.log("WE ARE STILL BETTER, YOU GOT LUCKY!")
} else if(colts = patriots){
	console.log("WE ARE EQUAL BUT BETTER")
}
//Gold from repl
var optimism = Number(prompt("How do you feel on a scale of 1-5"))
if (optimism === 1){
  console.log("Cheer up buckeroo")
}else if(optimism === 2){
  console.log("Hope your day gets better")
}else if(optimism === 3){
  console.log("Average days are average")
}else if(optimism === 4){
  console.log("Good days are nice")
}else if(optimism === 5) {
  console.log("Super")
}else{
  console.log("I guess you didn't say anything")
}
//Use alert instead of console.log