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
////While Loop
//var loopname = "Michael Jackson"
//var lcv = 0; //this is a loop control variable
//while(lcv < 1000) {
//	console.log(loopname.toUpperCase())
//	lcv += 1; //THIS IS CRITICAL!!! NO VAR LEADS TO INFINITY!
//}
////create a while loop that starts at zero and ends at 10
////this while loop should pring each number of the lcv
////make your lcv var count = 0
//var count = 1
//while(count <= 10){
//	console.log(count)
//	count++ //++ is equal to count +=1
//}
//var num = 10; // lcv be we named it num
//while(num > 0){ //while wrting in {} it becomes a code block
//	console.log(num)
//	num -= 1;
//}
var evenCount = 1;
while (evenCount <= 20){
	if (evenCount % 2==0){
		console.log(evenCount + " is even")
	}else{
		console.log(evenCount + " is odd")
	}
	evenCount++
}

//create a hwile loop that will count to 50 by 5
//use the lcv variable of countFive

var countFive = 0;
while(countFive <= 50){
	if(countFive % 5==0){
		console.log(countFive)
	}
	countFive++
}
//can also be done as
var countFive =0
while ( countFive <= 50){
	console.log(countFive)
	countFive +=
}