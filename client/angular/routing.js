angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "": {
                        templateUrl: 'angular/app/home/home.html',
                        controller: 'homeController',
                        controllerAs: 'home'
                    }
                }
            });
    }
]);