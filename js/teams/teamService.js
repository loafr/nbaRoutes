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
			deferred.resolve(data);
			//
		})
		return deferred.promise;
	}


});










