//to make a variable global, return it

//Closures
//1. A closure give you access ot the varibales set in a FUNCTION
//	after a function has completed and returned.
//2. Help keep variables from getting pushed into the global scope. 
//3. Degree of protection. Variable can't be overwritten unless
//	we deliberately do so. 

var trevor = {}
var setAge = function(myAge) {
	var birthday = "3/17/1995"

	return {
		getBirthday : function(){
			return birthday
		},
	

		getAge : function() {
			return myAge
		}
	}
}
trevor.age = setAge(21)
console.log(trevor.age)
console.log(trevor.age.getAge())
console.log(trevor.age.birthday)
console.log(trevor.age.getBirthday())