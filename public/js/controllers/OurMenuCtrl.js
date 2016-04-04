angular.module('OurMenuCtrl', []).controller('OurMenuCtrl', ['$scope', function($scope) {
	console.log("menu working?");
		$scope.pasta 	  	= false;
		$scope.pizza 	  	= false;
		$scope.entrees	  	= false;
		$scope.appetizers   = false;
		$scope.desserts     = false;
/* ---------------------------------------------- /*
    * One page scroll
/* ---------------------------------------------- */
	$('#menu-items').onePageNav();
	
	
}]);