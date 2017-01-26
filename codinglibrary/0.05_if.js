var isOn = true;
var isHot = true;
//1
if(isOn === true){
	console.log("This light is on, it's too bright dude.");
}
if(isOn){
	console.log("Dude, turn the music off.")
}
/// Boolean operators
//	&& = and
if(isOn && isHot){
	console.log("Dude,that music is on, and it is so hot.")
}
// || = or 
if(isOn || isHot){
	console.log("dude, that music is on, it's loud, and it is NOT hot.")
}
// ! = not
if(!isHot){//is looking for isHot to not be true
	console.log("It is not hot.")
}