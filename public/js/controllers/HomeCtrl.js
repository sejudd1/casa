angular.module('HomeCtrl', []).controller('HomeCtrl', ['$scope', function($scope) {
	
	$scope.tagline = 'Authentic Sonoran Style Mexican Food';
	console.log("Home Controllers")


	/* ---------------------------------------------- /*
	         * Background Slide show
	/* ---------------------------------------------- */
	console.log("yo slide");
	$('#home').superslides({
	    animation: 'fade',
	    play: '4000',
	});
	
}]);

