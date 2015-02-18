var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm != $scope.showNewGameForm;
	};
	


	$scope.getTeamData = function($route.current.params.team) { // not sure about this yet...
		//
	};



});