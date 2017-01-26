//// DRY - Don't Repeat Yourself
//// WET - Write Everything
//var name = "Trevor"
//console.log(name.length)
//console.log(name[1])
//console.log(name[0].toLowerCase() + name[1] + name[2] + name[3]);
//console.log(name[0])
//console.log(name[1])
//console.log(name[2])
//console.log(name[3])
//console.log(name[4])
//console.log(name[5])
//While Loop
var loopname = "Michael Jackson"
var lcv = 0; //this is a loop control variable
while(lcv < 1000) {
	console.log(loopname.toUpperCase())
	lcv += 1; //THIS IS CRITICAL!!! NO VAR LEADS TO INFINITY!
}
//create a while loop that starts at zero and ends at 10
//this while loop should pring each number of the lcv
//make your lcv var count = 0
var count = 0
while(count < 10){
	console.log(count)
	count++ //++ is equal to count +=1
}