//IIFE - Immediately Invoked Funcional Expressions

//build a function that is called greeting - it accepts a name and console log "hello " name

var greeting = function(name){
	console.log("Hello " + name)
}("Gary")

//greeting("Cameron")

//review for test tomorrow
//build a function that takes two number and adds them together 
//and console logs the total.

var addNums = function(num1, num2) {
	console.log(num1 + num2)
}

//addNums(1,2)

var addNums = (function(num1, num2) { //the (before the function is unnessicary
	console.log(num1 + num2)
})(1,2)

//test question is what is an iffy, an imediately invoked function