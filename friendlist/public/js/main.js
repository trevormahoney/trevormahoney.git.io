//var $friends = $('#friends')
//var $name = $('#name')
//var $occupation = $('#occupation')
//var $age = $('#age')
//
//var friendTemplate = "" +
//	"<li>" +
//	"<p><strong>Name:</strong> {{name}}</p>" +
//	"<p><strong>Occupation:</strong> {{occupation}}</p> " +
//	"<p><strong>Age:</strong> {{age}}</p> " +
//	"</li>"
//
////Adding a friend
//function addFriend(friend){
//	$friends.append(Mustache.render(friendTemplate, friend))
//}
////these are creating a jQuery object
//
//$(document).ready(function(){
//	//alert("jQuery is working")
//
//	//GET data request
//	$.ajax({
//		type	: 'GET',
//		url		: 'http://rest.learncode.academy/api/learncode/friends',
//	//success is a promise
//	//this promise is ajax get data from the url, if response is successful run the function
//		
//
//		success: function(friends){
//			$.each(friends, function(i, friend){
//				addFriend(friend)
//			})
//		},
//
//		error : function(){
//			alert('error loading friends')
//		}
//
//	})
//
//	//POST to add a friend
//
//	$('#add-friend').on('click', function(){
//
//		var friend = {
//			name: $name.val(),
//			occupation: $occupation.val(),
//			age: $age.val()
//		}
//
//		$.ajax({
//			type 	: 'POST',
//			url 	: 'http://rest.learncode.academy/api/learncode/friends/',
//			data	: friend,
//			success : function(newFriend){
//				addFriend(newFriend)
//			},
//	
//			error 	: function(){
//				alert('Error')
//			}
//
//
//		})
//
//	})
//	
//	$friends.delegate('.remove', 'click', function){
//		var $li = $(this).clostest('li')
//
//		$.ajax({
//			type	: 'DELETE'
//			url		: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
//				success: function(){
//					$li.fadeOut(300, function(){
//						$(this).remove()
//					})
//				}
//
//		})
//	})
//	//DELETE to dump them
//
//})

//This section renames the jQuery object to save typing
//It also saves a reference of where the html elements are on the dom
//this helps so we don't have to traverse each time we call one of them.


var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');
var $occupation = $('#occupation');
var $fav = $('#fav')

//this is the mustache template 
//this is a great teaching moment for the button id={{id}}
//this teaches how to identify the entry and eventually call
//it to delete it
//Remember that id is given to the post that we send to the api
//we can attach that to the button and then use it to delete
//a friend
var friendTemplate = "" + 
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" + 
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<p><strong>Occupation:</strong> {{occupation}}</p>" +
	"<p><strong>Favorite Thing About Them:</strong> {{fav}}</p>" +
	"<button id='{{id}}' class='remove'>Delete Friend</button>" +
	"</li>";

//this is a helper function to take a friend object
//and then grab each property and insert it into the template.
function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};

$(document).ready(function(){
	

	//This ajax will run as soon as the document is ready.
	//then loop through and create the DOM element to display it
	//This is how a friend list is created as soon as we open the
	//localhost:3000
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',

		//remember that ajax is asynchronous - if we don't use the promises
		//then the DOM will try to load without any data.
		//the promise says - hey application wait till we have data then 
		//load.
		success: function(friends) {
		// console.log("I have friends!", data); //returns all of johnbob's friends
		//the .each is a better way to iterate.  This is like saying
		//for (friend in friends) {
			//addFriend(friends[friend])
		//}
			$.each(friends, function(i, friend){
				addFriend(friend);	
			});

		},

		error: function(){
			alert('error loading friends');
		}	
	});

	//Remember that the anonymous function of the 'click'
	//is where we build our friend object and then make our
	//ajax post on the api.
	//if we did not put the ajax post inside of this it would
	//run automatically and there wouldn't be time to put info
	//inside our html inputs.
	$('#add-friend').on('click', function(){

		var friend = {
			name: $name.val(),
			occupation: $occupation.val(),
			age: $age.val(),
			fav: $fav.val()

		};

		//AJAX POST Function - click the button w/ id add-friend and then pass it to the API
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			//Like the GET request this promise has data in it.
			//when we post data to the api it sends back data to use.
			//try it in post man and at the bottom you'll see 
			//a name / age / and then an id returned.
			//in our success we add it to the DOM with our helper function.
			success: function(newFriend){
				addFriend(newFriend);	
			},

			error: function(){
				alert('error saving order');
			}
		});
		$('#inputValueOne').children('input').val('')
		$('#inputValueTwo').children('input').val('')
		$('#inputValueThree').children('input').val('')
		$('#inputValueFour').children('input').val('')


	});

	//.delegate allows you to remove items that were loaded by other students
	//look into the friendTemplate from above the button has the class="remove"
	//in it.
	$friends.delegate('.remove', 'click', function(){

		//this should look a little familiar.  It is saying whatever was clicked with the
		//class of .remove then $li is the closest li to that particular button.
		var $li = $(this).closest('li');
		//AJAX DELETE Function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: 'DELETE',
			//$(this).attr('id') is that button's id we set up the template.
			//it is the same thing as copying an id like we did in postman
			//and running the delete request at the API.
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				//once that happens we fade out the li and then we remove
				//it from the DOM.
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});
});