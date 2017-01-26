////functions vs typing it out
//function hello(){
//	console.log("Hello World")
//}
//hello();
////typing it out
//console.log("hello world")
//console.log("hello world")
//console.log("hello world")
//console.log("hello world")
//console.log("hello world")
//function greeting(name){
//	return "Good day " + name;
//}
//var addGreeting = greeting("Paul") + ", how are you doing today";
//console.log(addGreeting)

////adding numbers to functions
//function multNum(num2, num1){ //This one is how you do it
//	var product = num2 * num1;
//	return product;
//}
//console.log(multNum(9, 2));

//function sumNum(num2, num1){
//	var addition = num2 +num1;
//	return num2 + num1
//}
//sumNum(8,8);

//function divNum(num1, num2){
//	console.log(num1 / num2)
//}
//divNum(7, 8);

//function subtractTwoNumber(num1, num2){
//	console.log(num1 - num2)
//}
//subtractTwoNumber(4,3);

//function calculatePriceIndiana(quantity, price){
//	var tax = 0.07
//	var totalTax = quantity * price *tax;
//	var totalPrice = totalTax + quantity * price;
//	return totalPrice
//}
//console.log(calculatePriceIndiana(17, 5))

// built in Objects examples
//var today = new Date();
//console.log(today.toDateString())
//
//function checkOdd(num){
//	if (num % 2 == 0){
//		return "Even"
//	}else{
//		return "Odd"
//	}
//}
//console.log(checkOdd(1))
//
//function divByThree(num){
//	if (num % 3 == 0){
//		return "Divisable by 3"
//	}else{
//		return "Not divisable by 3"
//	}
//}
//console.log(divByThree(7))
//
//function hello(name){
//	if(name == "Chris"){
//		return "Hello Chris"
//	}else{
//		return "Hello not Chris"
//	}
//}
//console.log(hello("Chris"))

//--------------------------------------------------------------
//--------------------------------------------------------------
// -------------- Challenge: Functions  ------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
/*
Write a function with two strings as parameters.
		The function should concatenate the string.

Write a function that will help me easily calculate monthly bills.

Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.
*/
//1
function combineTwoStrings(string1, string2){
	var stringCombination = string1 +string2
	return stringCombination
}
console.log(combineTwoStrings("hotdog ", "cheese"))
//2
function monthlyBills(expense1, expense2, expense3){
	var fullExpenses = expense1 + expense2 + expense3
	return fullExpenses
}
console.log(monthlyBills(300, 400, 500) + " Wow that is a lot!")
//3
function hotBunsPrice(quantity, price, nameOfItem){
	var tax = 0.07
	var itemTax = quantity * price * tax
	var totalPrice = quantity * price + itemTax + " dollars spent in " + nameOfItem
	return totalPrice
}
console.log(hotBunsPrice(15, 1.99, "Hot buns"))
//complete all three  challenges before the alloted time was over
