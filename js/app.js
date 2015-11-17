var app = angular.module('mainApp', []);

app.controller('mainController', function($scope, $http) {
	var options = {
		method: 'GET',
		url: 'http://www.cineworld.com/api/quickbook/cinemas',
		data: {
			key: '#'
		};
	};
	$http(options)
	  .success(function(data) {
	  	return $scope.shows = data.cinemas;
	});
});

