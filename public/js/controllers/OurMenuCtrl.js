angular.module('casaApp', ['ui.bootstrap']).controller('OurMenuController', function($scope) {
	
	$scope.tagline = 'Authentic Sonoran Style Mexican Food';
	$scope.bigData = {};

	$scope.bigData.appetizers = false;
	$scope.bigData.pasta = false;
	$scope.bigData.pizza = false;
	$scope.bigData.entrees = false;
	$scope.bigData.desserts = false;

	$scope.change = function () {
		console.log($scope.bigData)
	};

	
});