var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj) {
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		// if (parseInt(gameObj.homeTeamScore) || parseInt(gameObj.opponentScore) === NaN) {
		// 	alert("those aren't numbers, stupid head")
		// 	break;
		// }
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won === true;
		} else { 
			gameObj.won === false;
		}
		$http(
		{
			method: 'POST',
			url: url,
			data: gameObj
		}).then(function() {
			//
		})
	}; // end of addNewGame

	this.getTeamData = function(team) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http(
		{
			method: 'GET',
			url: url,
			//data: ??
		}).then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if(results[i].won === true) {
					wins++;
				} else {
					wins--;
				}
			};
			results.wins = wins; //adding a property to results array
			results.losses = losses;
			deferred.resolve(results);
			
		})
		return deferred.promise;
	}


});


// Now that we have complete wins and losses variables, we need to somehow access those variables outside of our service. 
// We know that we have a results array which holds an array of all the games the particular team has played. 
// What if we do something a little unconventional here. We know we're going to eventually resolve our promise we made 
// earlier with the results variable (so we can access all the games in our controller). 
// We also know that an array is really just an object at heart. Let's add a 'wins' property to the results array 
// and set it equal to our wins variable and let's also set a 'losses' property on our results array and set it equal 
// to our losses variable. I know this is a little weird because we're not adding items to our array like we usually do 
// but instead we're adding properties to this array. It's a good reminder that arrays are just objects. 
// Once you add the wins and losses property, go ahead and resolve our deferred object we made earlier with our results array.
// * Now that we've set up those two methods on our teamService object, we can close teamService. We won't need to modify this 
// file again but we will need to call the methods we set up in teamService.js later.







