// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })

        .when('/our-menu', {
            templateUrl: 'views/our-menu.html',
            controller: 'MenuController'
        })

        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })

        .when('/reservations', {
            templateUrl: 'views/reservation.html',
            controller: 'ReservationController'
        })


        // admin page that will use the UserController
        .when('/users', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        });



    $locationProvider.html5Mode(true);

}]);