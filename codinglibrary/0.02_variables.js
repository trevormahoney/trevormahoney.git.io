/////Variables with strings
////this variable is a string type
//var firstname ="Trevor"
//var lastname="Mahoney"
//var fullname=firstname+" "+lastname
////concatenation (this is where you can build or combine strings)
//console.log(firstname)
//console.log(firstname+" "+lastname)
//console.log(fullname)
//
/////empty variables
//
//console.log(num)
//var num
/////empty string
//var petsName=""
//petsName="gus"
//console.log(petsName)
//if (true){
//	let 
//}
//
///Short hand operators
//var age=21
//console.log(age+1)
////is the same as
////console.log(1+=1)//1=1+1//which is false
//console.log(age+=1)//age=age+1//which is true
////var 2nite="Wednesday Night"//cant do this because you can start variables with a number

//--------------------------------------------------------
//--------------------------------------------------------
// -------------- Challenge: Variables-----------
//--------------------------------------------------------
//--------------------------------------------------------

/*
CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 
*/

var myBankAccount = 2000000; //No dollar sign, we'll discuss how to add this later.
var numberOfHotDogsKobyashiAte = 39; //Check this stat. Not that's how many he ate.

console.log(myBankAccount);
console.log("Kobyashi:" + numberOfHotDogsKobyashiAte); /* <----String concatenation

/*-----------------------------------------------------------*/

CHALLENGE: Silver
 Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiply by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/

/*-----------------------------------------------------------*/
CHALLENGE: Gold
//Challenge #3 - Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount of glasses of water per day (as a number).
// Calculate how many glasses of water you would need for the rest of your life.
// Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".

//Bronze
var myNumberOfBooks = 100
var numberOfHoursSpentOnComputer = "Too many"
var myAge = 21
var numberOfCaloriesEattenToday = 1000
//Silver
var myNumber = 0;
console.log(myNumber += 10);
console.log(myNumber -= 1);
console.log(myNumber *= 9);
console.log(myNumber /= 7);
//Gold
var myAge = 21;
var maxAge = 100;
var glassesOfWaterPerDay = 10;
console.log(("You will need "+((maxAge - myAge)*365.25)*glassesOfWaterPerDay)+" glasses of water in the rest of your life.");
//Can also be var total ((maxAge - myAge)*365.25)*glassesOfWaterPerDay)
//var message = "You will need " + total + " glasses of water in the rest of your life."
//I complete these challenges in less than the alloted time of 10 minutes.