//this is how to create a JS array
var names = ["paul", "gavin", "verne", "lisa", "kenn"]
var nums = [1, 2, 3, 4, 5, 6, 4501]
var mixed = ["dog", false, 6, "squirrel", 2]
console.log(names[2])
console.log(nums[6])
console.log(mixed[3])
//can we use a for in loop to iterate and console log each name in names
for (name in names){
	console.log(names[name])
}
//create an array of your favorite candy bars
var candyBars = ["butterfinger", "milkyway", "snickers"]
candyBars.push("Peanut Butter Cups") //adding a thing to an array without going up and placing it in the array, adds to end
candyBars.pop() //takes out the last thing you entered
for (candy in candyBars){
	console.log(candyBars[candy])
}
console.log("--------------------")
console.log(candyBars.slice(0,2)) //keeps only what 0 through 1
console.log("--------------------")
var blah = ["one", "two"]
console.log(blah) //.splice will allow us to remove the item from the array
console.log(blah.indexOf("two")) //takes particular elemts from an array
blah.splice(1)
console.log(blah) //.index will return the index of where a value is located inthe array