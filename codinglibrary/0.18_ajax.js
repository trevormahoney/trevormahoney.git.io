$(document).ready(function(){
	$.ajax({ //This is how you access ajax 
		dataType: "json",
		url: "http://swapi.co/api/people/",
		success: function(data){
			console.log(data.results.forEach(function(element){
				console.log(element.name)
			}))
		}
	});
	$.ajax({
		dataType: "json",
		url: "http://swapi.co/api/starships/",
		success: function(data){
			console.log(data.results.forEach(function(element){
				console.log(element.name)
			}))
		}
	})
})