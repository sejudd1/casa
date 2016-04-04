
// public/js/appRoutes.js
angular.module('casaApp', []).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

 

    $stateProvider
        // home page
        .state({
            name: 'home',
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        //about page
        .state({
            name: 'about',
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        //our-menu page
        .state({
            name: 'our-menu',
            url: '/our-menu',
            templateUrl: 'views/our-menu.html',
            controller: 'OurMenuCtrl'
        })
        //gallery
        .state({
            name: 'gallery',
            url: '/gallery',
            templateUrl: 'views/gallery.html',
            controller: 'GalleryCtrl'
        })
        //contact
        .state({
            name: 'contact',
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        //reservation
        .state({
            name: 'reservation',
            url: '/reservation',
            templateUrl: 'views/reservation.html',
            controller: 'ReservationCtrl'
        })


        // admin page that will use the UserController
        .state({
            name: 'user',
            url: '/user',
            templateUrl: 'views/user.html',
            controller: 'UserController'
        })
        
        otherwise({
        redirectTo: '/home'

        });



    // $locationProvider.html5Mode(true);
    // $locationProvider.otherwise('/home');

}]);