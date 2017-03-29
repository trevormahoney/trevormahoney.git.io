// window.addEventListener('keydown', function (e)
function playSound(e) {
	//For where window is, this is the element we are listening for, sometimes we are going to want to listen for a div, input, etc...
	//We are going to listen from 'addEventListener' for the keydown event and it will run the function.

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //This stops the function from running all together
	//THE ! MEANS NO. SO THIS MEANS IS THERE IS NO AUDIO.

	audio.currentTime = 0; // This rewinds it to the start of the audio file. 
	audio.play();
	//This means if we have that audio element we will play it.
	//If you call .play on an audio element that is already playing, it wont play again because it is already playing.
	key.classList.add('playing'); //This adds the border when the key is pressed, but it doesn't remove it after it is done.
};

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; // this skips event if not transform
	this.classList.remove('playing')
	// this is they thing that got called 
	// this for this application is one of these 
		// <div data-key="65" class="key">
  //   	  <kbd>A</kbd>
  //   	  <span class="sound">clap</span>
  //   	</div>
}
	// setTimeout(function() { //Removing it using this is a way to do it, but it is not the most efficient because there is already a time out in the css

	// }, 0.07)

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

//Big things learned in this lession: keyevents, playing audio, listening for transition end event. 

// video for reference https://javascript30.com/account/access/58b8621f40eb5a60e7f8c210/view/6cf22385d8