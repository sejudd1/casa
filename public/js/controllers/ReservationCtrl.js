angular.module('ReservationCtrl', []).controller('ReservationController', function($scope) {
	
	$scope.tagline = 'Authentic Sonoran Style Mexican Food';

	/* ---------------------------------------------- /*
         * Date and Timepicker
	/* ---------------------------------------------- */
	$('#picktime').timepicker({
	    disableTouchKeyboard: 'true'
	});

	$('#pickdate').datepicker({
	    disableTouchKeyboard: 'true',
	    autoclose: 'true'
	});
	
});